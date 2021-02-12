import styles from '../../assets/css/modules/Navbar.module.css'
import {Link} from 'react-router-dom'
import {ReactComponent as ProfilePicture} from '../../assets/images/profile.svg'
import {ReactComponent as Logout} from '../../assets/images/logout.svg'
import {ReactComponent as VideoCall} from '../../assets/images/Videocall.svg'

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
                    <div style={active === 'projects' ? activeEle : {}}><ProfilePicture/></div>
                </Link>
                <Link to={`${path}/meetings`}>
                    <div style={active === 'meetings' ? activeEle : {}}><VideoCall /></div>
                </Link>
                <div className={styles.logoutButton} onClick={()=>logoutUser(setLogin)}>
                    <Logout />
                </div>
            </nav>
        </>
    )
}
