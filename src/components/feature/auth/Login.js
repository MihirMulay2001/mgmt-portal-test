import { Formik, Field, Form, ErrorMessage} from 'formik'
import styles from '../../../assets/css/modules/inputform.module.css'
import login from '../../../api/post/login'


const validateValues = (values) =>{
    let error = {} 
    if(!values.username){
        error.username = '*required'
    }
    if(!values.password){
        error.password = '*required'
    }
    return error;
}

export default function Login({setLogin, setAuthPage}) {
    return (
        <div>
            <Formik
                initialValues = {{ username:'' , password : '' }}
                validate = {validateValues}
                onSubmit = {
                    async (values,{setSubmitting}) =>{
                            setSubmitting(true)
                            const data = await login(values);
                            if(Object.entries(data).length === 1){
                                alert(data.message);
                                setSubmitting(false);
                            }
                            else{
                                localStorage.setItem('Token',data.Token);
                                setSubmitting(false);
                                setLogin(true);
                            }
                        }
                     
                    }
            >
                <Form className={styles.form}>
                    <div className={styles.element}>
                        <label htmlFor = "username"> Username</label>
                        <Field name="username" type="text" />
                        <span ><ErrorMessage name="username" /></span>
                    </div>
                    <div className={styles.element}>
                        <label htmlFor = "password"> Password</label>
                        <Field name="password" type="password" />
                        <span><ErrorMessage name="password" /></span>
                        <button type="button" onClick = {(e)=>{e.preventDefault();setAuthPage(false)}} className={styles.fpbtn}>Forgot Password</button>
                    </div>
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    )
}
