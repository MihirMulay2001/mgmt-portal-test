import styles from '../../assets/css/modules/Navbar.module.css'
import {Link} from 'react-router-dom'
import {ReactComponent as ProfilePicture} from '../../assets/images/profile.svg'
import {ReactComponent as Logout} from '../../assets/images/logout.svg'
import {ReactComponent as VideoCall} from '../../assets/images/Videocall.svg'




function logoutUser(setLogin){
    localStorage.removeItem('Token');
    setLogin(false);
}
function logoutConfirmation(setLogin){
    console.log('click');
    const popUp = document.getElementById('popUp')
    const btn = document.getElementById('logoutBtn')
    const close = document.getElementById('closepopup')
    const logoutBtn = document.getElementById('logoutButton')
    btn.onClick= ()=>{
        popUp.style.display = "block";
    }
    close.onClick= ()=>{
        popUp.style.display= "none";
    }
     window.onClick = (event)=>{
        if(event.target == popUp) popUp.style.display = "none" ;
    }
    logoutBtn.onClick = ()=>{
        logoutUser(setLogin)
    } 
   
}

export default function Navbar({active, path,setLogin}) {
    const activeEle = {
        backgroundColor: 'white'
    }
    return (
        <>
            <nav className={styles.nav}>
                <Link to={`${path}/projects`}>
                    <div style={active === 'projects' ? activeEle : {}}><ProfilePicture/></div>
                </Link>
                <Link to={`${path}/meetings`}>
                    <div style={active === 'meetings' ? activeEle : {}}><VideoCall /></div>
                </Link>
                <div id="logoutBtn" className={styles.logoutButton} onClick={()=>logoutUser(setLogin)}>
                    <Logout />
                </div>
            </nav>
        </>
    )
}
