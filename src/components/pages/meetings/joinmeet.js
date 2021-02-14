
import styles from '../../../assets/css/modules/joinmeet.module.css'
import activemeetings from '../../../api/get/activemeetings'
import joinmeet from '../../../api/get/joinmeet'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Joinmeet extends Component {
    constructor(path){
        super(path)
        this.path = path;
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
        const {roomValue, joinedBy} = await joinmeet({roomName: meet.roomName}) 
        this.setState({
            joinMeet: true,
            meetingDetails: {
                roomValue: roomValue,
                name: joinedBy,
                user: 'participant'
            }
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
        if(this.state.joinMeet === true){
            const{roomValue,name,user} = this.state.meetingDetails;
            return(
                <Redirect to= {{
                pathname: `${this.path}/conference`,
                state: {roomValue, name,user}
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
