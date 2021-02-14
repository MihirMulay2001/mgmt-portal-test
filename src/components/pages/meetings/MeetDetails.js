import React , {Component} from 'react'
import styles from '../../../assets/css/modules/MeetDetails.module.css'
import activemeetings from '../../../api/get/activemeetings'
import postmom from '../../../api/post/postmom'
import { ErrorMessage, Formik, Form, Field } from 'formik'

export default class Meetdetails extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            submitMOM: false,
        }
        this.MeetingCard = this.MeetingCard.bind(this)
        this.MomForm = this.MomForm.bind(this)
    }
     async componentDidMount(){
        const dataJson = await activemeetings();
        this.setState({
            data: dataJson.reverse()
        })
    }
    MomForm({item}){
        const validateData =(values)=>{
            let errors = {};
            if(!values.mom) errors.mom = '*required'
            return errors;
        }
        return(
            <>
                <Formik
                    initialValues ={{roomName:item.roomName,mom: ''}}
                    validate={validateData}
                    onSubmit = {
                        async (values, {setSubmitting})=>{
                            setSubmitting(true);
                            await postmom(values);
                            setSubmitting(false);
                            this.setState({
                                submitMOM:true
                            })
                        }
                    }
                >
                    <Form>
                        <h4>Enter the MOM:</h4>
                        <Field name="mom" type="textarea" />
                        <span><ErrorMessage name='mom'/></span>
                        <button type="submit">Submit MOM</button>
                    </Form>
                </Formik>
            </>
        )

    }
    MeetingCard({item}){
        // if(this.state.submitMOM === true){
        //     window.location.reload()
        // }
        return(
            <div className={styles.card}>
                <div>
                    <div>
                    <h3>Topic: </h3>{item.roomName}
                    </div>
                    <div>
                        <h3>Hosted by:</h3>{item.meetingStartedBy}
                    </div>
                </div>
                <div>
                    {
                        typeof(item.MOM)!== 'undefined' 
                        ? <><h4>MOM:</h4><p className={styles.mom}>{item.MOM}</p></> 
                        : <this.MomForm item={item}/>
                    }
                </div>
            </div>
        )
    }
    render() {
        if((this.state.data).length === 0)
        {
            return (
                <div>
                    Loading....
                </div>
            )
        }else{
        return (
            <div className={styles.container}>
                {
                    this.state.data.map((item, i)=>{
                        return(
                            <this.MeetingCard key={i} item={item}/>
                        )
                    })
                }
            </div>
        )
    }
}
}

