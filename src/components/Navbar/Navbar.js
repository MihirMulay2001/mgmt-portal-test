import styles from '../../assets/css/modules/Navbar.module.css'
import {Link} from 'react-router-dom'

export default function Navbar({active, path}) {
    const activeEle = {
        backgroundColor: 'white'
    }
    return (
        <>
            <nav className={styles.nav}>
                <Link to={`${path}/projects`}>
                    <div style={active === 'projects' ? activeEle : {}}><img src="" alt= "Projects" /></div>
                </Link>
                <Link to={`${path}/meetings`}>
                    <div style={active === 'meetings' ? activeEle : {}}><img src="" alt= "Meetings" /></div>
                </Link>
                
            </nav>
        </>
    )
}
