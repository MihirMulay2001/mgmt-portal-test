import styles from '../../../assets/css/modules/inputform.module.css'
import styles2 from '../../../assets/css/modules/createmeet.module.css'
import {Field, Formik, ErrorMessage, Form} from 'formik'

const getMeetingInfo = async (roomName) =>{
    const authToken = localStorage.getItem('Token')
   
    const data = await fetch('https://stc-mgmt-portal.herokuapp.com/meeting/createMeet',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken

        },
        body: JSON.stringify({'roomName':roomName})
    })
    const dataJson = await data.json()
    return dataJson;
}



const validateValues = (values) =>{
    let error= {};
    if(!values.displayname){
        error.displayname = '*required'
    }
    if(!values.roomName){
        error.roomName = '*required'
    }
    return error;
}

export default function CreateMeet({setMeetingDetails}) {
    return (
        <>
            <div className={styles2.container}>
                <h1> Enter room name</h1>
                <Formik
                    initialValues= {{roomName: '', displayname: ''}}
                    validate = {validateValues}
                    onSubmit = {
                        async (values, {setSubmitting}) =>{
                            setSubmitting(true);
                            setMeetingDetails(await getMeetingInfo(values.roomName));
                            setSubmitting(false);
                        }
                    }
                >
                    <Form className={styles.form}>
                        <div className={styles.element}>
                            <label htmlFor="roomName">Meet Name</label>
                            <Field name="roomName" type="text" />
                            <span ><ErrorMessage name="roomName" /></span>
                        </div>
                        <div className={styles.element}>
                            <label htmlFor="displayname">Display Name</label>
                            <Field name="displayname" type="displayname" />
                            <span ><ErrorMessage name="displayname" /></span>
                        </div>
                        <button type="submit">Create meeting</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}