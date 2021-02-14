import { Formik, Field, Form, ErrorMessage} from 'formik'
import styles from '../../../assets/css/modules/inputform.module.css'
import signup from '../../../api/post/signup'


const validateValues = (values) =>{
    let error = {} 
    if(!values.username) error.username = '*required' ; 
    if(!values.password) error.password = '*required' ; 
    if(values.password.length < 6) error.password = '*password should be more than 6 characters long';
    if(!values.name) error.name = '*required' ; 
    if(!values.email) error.email = '*required' ;
    return error;

}

export default function SignUp({setFlag}) {
    return (
        <div>
            <Formik
                initialValues = {{name:'', email:'', username:'' , password : '', githubLink:'' }}
                validate = {validateValues}
                onSubmit = {
                        async (values, {setSubmitting}) =>{
                            setSubmitting(true);
                            await signup(values)
                            setSubmitting(false);
                            setFlag('login')
                    }
                }
            >
                <Form className={styles.form}>
                    <div className={styles.element}>
                        <label htmlFor="name">Full Name</label>
                        <Field name="name" type="text" />
                        <span ><ErrorMessage name="name" /></span>
                    </div>
                    <div className={styles.element}>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <span ><ErrorMessage name="email" /></span>
                    </div>
                    <div className={styles.element}>
                        <label htmlFor = "username"> Username</label>
                        <Field name="username" type="text" />
                        <span ><ErrorMessage name="username" /></span>
                        
                    </div>
                    <div className={styles.element}>
                        <label htmlFor = "password"> Password</label>
                        <Field name="password" type="password" />
                        <span><ErrorMessage name="password" /></span>
                        
                    </div>
                    <div className={styles.element}>
                        <label htmlFor = "githubLink"> Github Link</label>
                        <Field name="githubLink" type="text" />
                        <span><ErrorMessage name="githubLink" /></span>
                    </div>
                    <button type="submit">Sign Up</button>
                </Form>
            </Formik>
        </div>
    )
}
