import styles from '../../../assets/css/modules/inputform.module.css'
import resetpassword from '../../../api/post/resetpassword'
import updatepassword from '../../../api/put/updatepassword'
import {useState} from 'react'

export default  function ForgotPassword ({setauthPage}){
    const [flag, setFlag] = useState(false)
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [newpassword, setPassword] = useState('')
    if(!flag){
        return(
        <>
        <form className={styles.form}>
            <div className={styles.element}>
                <label> Enter you email address</label>
                <input type="email" value={email} name='email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <button type="button" onClick={async ()=>{
                console.log(email);
                    alert(await resetpassword(email));
                    setFlag(true);
                    }}> Get OTP
            </button>
        </form>
        </>
        )
    }
    else{
        return(
            <form className={styles.form}>
            <div className={styles.element}>
                <label> Enter the OTP</label>
                <input type="text" value={otp} onChange={(e)=>setOtp(e.target.value)}/>
            </div>
            <div className={styles.element}>
                <label> Enter your new password</label>
                <input type="password" value={newpassword} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="button" onClick={async ()=>{
                    alert(await updatepassword({otp, password: newpassword}));
                    setauthPage(true);
                    }}> Change Password</button>
        </form>
        )
        
    }
}