import styles from '../../../assets/css/modules/meetings.module.css'
import Navbar from '../../Navbar/Navbar'
import Content from '../../layout/Content'
import {Link} from 'react-router-dom'
import {useRouteMatch, Switch, Route} from 'react-router-dom'
import CreateMeet from './JoinMeet'
import JoinMeet from'./CreateMeet'
import MeetingDetails from './MeetDetails'

const MeetingLandingPage = ({path}) =>{
    return (
        <>
        <div className={styles.container1}>
            <h1> Fast, easy and secure meetings</h1>
            <p> Description will be filled here</p>
            <div className={styles.buttons}>
                <Link to={`${path}/createmeet`}><button> Create meeting</button></Link>
                <Link to={`${path}/joinmeet`}><button>Join Meeting</button></Link>
                <Link to ={`${path}/meetdetails`}><button>Meeting Details</button></Link>
            </div>
        </div>
        <div className={styles.container2}>
            illustration
        </div>
        </>
        

    )
}

export default function Meetings({path}) {
    const match = useRouteMatch()
    return (
        <>
            <Navbar active="meetings" path={path} />
            <Content>
                <Switch>
                    <Route exact path ={`${match.url}`}>
                        <MeetingLandingPage path = {match.url}/>
                    </Route>
                    <Route path ={`${match.url}/createmeet`}>
                        <CreateMeet/>
                    </Route>
                    <Route path ={`${match.url}/joinmeet`}>
                        <JoinMeet/>
                    </Route>
                    <Route  path ={`${match.url}/meetdetails`}>
                        <MeetingDetails/>
                    </Route>
                </Switch>
            </Content>
        </>
    )
}
