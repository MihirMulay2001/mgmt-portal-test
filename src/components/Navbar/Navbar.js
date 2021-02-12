import styles from '../../assets/css/modules/Navbar.module.css'
import {Link, Redirect} from 'react-router-dom'

function logoutUser(event){
    localStorage.removeItem('Token');
}

export default function Navbar({active, path}) {
    const activeEle = {
        backgroundColor: 'white'
    }
    return (
        <>
            <nav className={styles.nav}>
                <Link to={`${path}/projects`}>
                    <div style={active === 'projects' ? activeEle : {}}><img src="../../../assets/images/profile.svg" alt= "Projects" /></div>
                </Link>
                <Link to={`${path}/meetings`}>
                    <div style={active === 'meetings' ? activeEle : {}}><img src="../../../assets/images/VideoCall.svg" alt= "Meetings" /></div>
                </Link>
                <div onClick={logoutUser}>
                    Logout
                </div>
            </nav>
        </>
    )
}
