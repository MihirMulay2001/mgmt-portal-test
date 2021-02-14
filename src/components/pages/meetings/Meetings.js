import styles from '../../../assets/css/modules/meetings.module.css'
import Navbar from '../../layout/Navbar/Navbar'
import Content from '../../layout/Content'
import {Link} from 'react-router-dom'
import {useRouteMatch, Switch, Route} from 'react-router-dom'
import JoinMeet from './Joinmeet'
import CreateMeet from'./CreateMeet'
import MeetingDetails from './MeetDetails'
import Conference from './Conference'

const MeetingLandingPage = ({path}) =>{
    return (
        <>
        <div className={styles.container1}>
            <h1> Fast, easy and secure meetings</h1>
            <div className={styles.buttons}>
                <Link to={`${path}/createmeet`}><button> Create meeting</button></Link>
                <Link to={`${path}/joinmeet`}><button>Join Meeting</button></Link>
                <Link to ={`${path}/meetdetails`}><button>Meeting Details</button></Link>
            </div>
        </div>
        <div className={styles.container2}>
        </div>
        </>
        

    )
}

export default function Meetings({path, setLogin}) {
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
                        <CreateMeet path = {match.url}/>
                    </Route>
                    <Route path ={`${match.url}/joinmeet`}>
                        <JoinMeet path={match.url}/>
                    </Route>
                    <Route  path ={`${match.url}/meetdetails`}>
                        <MeetingDetails/>
                    </Route>
                    <Route  path ={`${match.url}/conference`} render={(props)=><Conference {...props}/>}/>
                </Switch>
            </Content>
        </>
    )
}
