import styles from '../../../assets/css/modules/meetings.module.css'
import Navbar from '../../Navbar/Navbar'
import Content from '../../layout/Content'
import {Link, Redirect} from 'react-router-dom'
import {useRouteMatch, Switch, Route} from 'react-router-dom'
import JoinMeet from './Joinmeet'
import CreateMeet from'./CreateMeet'
import MeetingDetails from './MeetDetails'
import Conference from './Conference'
import {useState} from 'react'

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

export default function Meetings({path, setLogin}) {
    const [meetingDetails, setMeetingDetails] = useState({})
    console.log(meetingDetails);
    const match = useRouteMatch()
    return (
        <>
            
            <Navbar active="meetings" path={path} setLogin={setLogin}/>
            <Content>
                <Switch>
                    <Route exact path ={`${match.url}`}>
                        <MeetingLandingPage path = {match.url}/>
                    </Route>
                    <Route path ={`${match.url}/createmeet`}>
                        <CreateMeet setMeetingDetails={setMeetingDetails}/>
                    </Route>
                    <Route path ={`${match.url}/joinmeet`}>
                        <JoinMeet setMeetingDetails = {setMeetingDetails}/>
                    </Route>
                    <Route  path ={`${match.url}/meetdetails`}>
                        <MeetingDetails/>
                    </Route>
                    <Route  path ={`${match.url}/conference`}>
                        <Conference meetingDetails={meetingDetails} setMeetingDetails={setMeetingDetails}/>
                    </Route>
                </Switch>
            </Content>
            {
                Object.entries(meetingDetails).length !==0
                ?
                <Redirect to={`${match.url}/conference`} />
                :''
            }
        </>
    )
}
