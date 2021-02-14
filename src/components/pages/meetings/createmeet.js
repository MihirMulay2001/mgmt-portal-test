import styles from '../../../assets/css/modules/inputform.module.css'
import styles2 from '../../../assets/css/modules/createmeet.module.css'
import {Field, Formik, ErrorMessage, Form} from 'formik'
import createmeet from '../../../api/post/createmeet'
import {useState} from 'react'
import {Redirect} from 'react-router-dom'





const validateValues = (values) =>{
    let error= {};
    if(!values.roomName){
        error.roomName = '*required'
    }
    return error;
}

export default function CreateMeet({path}) {
    const [meetDetails, setMeetingDetails] = useState({})
    if(Object.entries(meetDetails).length !== 0){
        const {roomValue, name} = meetDetails;
        return(
            <Redirect to= {{
                pathname: `${path}/conference`,
                state: {roomValue:roomValue, name:name,user:'creator'}
            }} />
        )
    }

    return (
        <>
            <div className={styles2.container}>
                <h1> Enter room name</h1>
                <Formik
                    initialValues= {{roomName: ''}}
                    validate = {validateValues}
                    onSubmit = {
                        async (values, {setSubmitting}) =>{
                            setSubmitting(true);
                            const data = await createmeet(values.roomName);
                            setSubmitting(false);
                            setMeetingDetails(data)
                        }
                    }
                >
                    <Form className={styles.form}>
                        <div className={styles.element}>
                            <label htmlFor="roomName">Meet Name</label>
                            <Field name="roomName" type="text" />
                            <span ><ErrorMessage name="roomName" /></span>
                        </div>
                        <button type="submit">Create meeting</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}