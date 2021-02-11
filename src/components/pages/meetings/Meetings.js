import styles from '../../../assets/css/modules/meetings.module.css'
import Navbar from '../../Navbar/Navbar'
import Content from '../../layout/Content'
import {Link} from 'react-router-dom'

export default function Meetings({path}) {
    return (
        <>
            <Navbar active="meetings" path={path} />
            <Content>
                <div className={styles.container1}>
                    <h1> Fast, easy and secure meetings</h1>
                    <p> Description will be filled here</p>
                    <div className={styles.buttons}>
                        <Link to={`${path}/meetings/joinmeet`}><button>Join Meeting</button></Link>
                        <Link to='/meetings/createmeet'><button> Create meeting</button></Link>
                        <Link to ='/meetings/meetingdeatails'><button>Meeting Details</button></Link>
                    </div>
                </div>
                <div className={styles.container2}>
                    illustration
                </div>
            </Content>
        </>
    )
}
