import {useState} from 'react'
import LoginForm from '../feature/auth/Login'
import SignUpForm from '../feature/auth/SignUp'
import styles from '../../assets/css/modules/LandingPage.module.css'
import Img from '../../assets/images/Landing_page.png'
import ForgotPassword from '../feature/auth/PasswordChange'
const AuthenticPage = ({setLogin, setAuthPage})=>{
    const [flag,setFlag] = useState('signup')
    return(
        <>
            <button className={styles.button}
            onClick={(e)=>{ 
                e.preventDefault();
                setFlag("signup")}}
            >
            Sign Up</button>
            <button className={styles.button}
            onClick={(e)=>{ 
                e.preventDefault();
                setFlag("login")}}
            >
            Login</button>
            {
                flag === "login"
                ?   <LoginForm setLogin={setLogin} setAuthPage={setAuthPage}/>
                :   <SignUpForm setFlag = {setFlag}/>
            }
        </>
    )
}



export default function LandingPage({setLogin}) {
    const [authPage, setauthPage] = useState(true)
    return (
        <>
            <div className={styles.container}>
                <div className={styles.intro}>
                <img src={Img} />    
                </div>
                <div className={styles.auth}>
                    {
                    authPage
                    ? <AuthenticPage setAuthPage={setauthPage} setLogin={setLogin}/>
                    : <ForgotPassword  setauthPage={setauthPage}/>
                    }
                </div>
            </div>
        </>
        
    )
}

