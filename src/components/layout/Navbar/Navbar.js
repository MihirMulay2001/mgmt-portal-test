import styles from '../../../assets/css/modules/Navbar.module.css'
import {Link} from 'react-router-dom'
import {ReactComponent as Project} from '../../../assets/images/project.svg'
import {ReactComponent as Logout} from '../../../assets/images/logout.svg'
import {ReactComponent as VideoCall} from '../../../assets/images/Videocall.svg'
import {ReactComponent as Profile} from '../../../assets/images/profile.svg'

function logoutUser(setLogin){
    localStorage.removeItem('Token');
    setLogin(false);
}


export default function Navbar({active, path,setLogin}) {
    const activeEle = {
        backgroundColor: 'white'
    }
    return (
        <>
            <nav className={styles.nav}>
                <Link to={`${path}/projects`}>
                    <div title="Projects"style={active === 'projects' ? activeEle : {}}><Project/></div>
                </Link>
                <Link to={`${path}/meetings`}>
                    <div title="Meetings"style={active === 'meetings' ? activeEle : {}}><VideoCall /></div>
                </Link>
                <div id="profileBtn" title="Name" className={styles.profileButton}>
                    <Profile />
                </div>
                <div id="logoutBtn" title="Logout" className={styles.logoutButton} onClick={()=>logoutUser(setLogin)}>
                    <Logout />
                </div>
            </nav>
        </>
    )
}















/*
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
   
}*/