
import styles from '../../../assets/css/modules/joinmeet.module.css'
import activemeetings from '../../../api/get/activemeetings'
import joinmeet from '../../../api/post/joinmeet'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Joinmeet extends Component {
    constructor(props){
        super(props)
        this.path = props.path;
        this.state = {
            joinMeet: false,
            meetings: [],
            meetingDetails: {}
        }
        this.Meetcard = this.Meetcard.bind(this)
        this.joinMeet = this.joinMeet.bind(this)
    }
    async componentDidMount(){
        const meetingList = await activemeetings()
        this.setState({
            meetings: meetingList.reverse()
        })
    }
    async joinMeet(event, meet){
        event.preventDefault();
        console.log(this.state.meetingDetails);
        const {roomValue, joinedBy} = await joinmeet({roomName: meet.roomName}) 
        this.setState({
            meetingDetails: {
                roomValue: roomValue,
                name: joinedBy,
                user: 'participant'
            },
            joinMeet: true,
        })
    }
    Meetcard({meet}){
        return(
            <tr>
                <td>
                    {meet.roomName}
                </td>
                <td>
                    {meet.meetingStartedBy}
                </td>
                <td>
                    <button onClick = {(e)=>this.joinMeet(e,meet)}>Join Meet</button>
                </td>
            </tr>
        )
    }
    render() {
        console.log(this.path);
        if(this.state.joinMeet === true){
            const{roomValue,name,user} = this.state.meetingDetails;
            return(
                <Redirect to= {{
                pathname: `${this.path}/conference`,
                state: {roomValue:roomValue, name: name,user:user}
                }} />
            )
        }
        if(Object.entries(this.state.meetings).length === 0)
        {
            return (
                <div>
                    Loading....
                </div>
            )
        }else{
            const meetings = this.state.meetings;
            return(
                <div className={styles.container}>
                    <table>
                        <thead>
                            <tr>
                                <th>RoomName</th>
                                <th>Meeting Started by</th>
                                <th>Join Meet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                meetings.map((meet, i) =>{
                                if(meet.status ==='inactive'){return(null)}
                                return(
                                <this.Meetcard key={i} meet={meet} />
                                )}
                            )}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}
