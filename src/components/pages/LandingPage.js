import Header from '../layout/Header'
import {useState} from 'react'
import LoginForm from '../feature/auth/Login'
import SignUpForm from '../feature/auth/SignUp'
import styles from '../../assets/css/modules/LandingPage.module.css'
import Img from '../../assets/images/Landing_page.png'


export default function LandingPage({setLogin}) {
    const [flag, setFlag] = useState('signup')
    return (
        <>
            <div className={styles.container}>
                <div className={styles.intro}>
                <img src={Img} />    
                </div>
                <div className={styles.auth}>
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
                        ?   <LoginForm setLogin={setLogin}/>
                        :   <SignUpForm setFlag = {setFlag}/>
                    }
                </div>
            </div>
        </>
        
    )
}

