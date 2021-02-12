
import styles from '../../../assets/css/modules/joinmeet.module.css'

import React, { Component } from 'react'

export default class Joinmeet extends Component {
    constructor(){
        super()
        this.state = {
            data: {}
        }
    }
    async componentDidMount(){
        const authToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDIxYTU5Mzg4OGYzMTAwMTU0NzliMjMiLCJpYXQiOjE2MTMxMTA4NDd9.C4VrazaN10hf90yr9VtYnX7O3iY4f6ijgV_AEa3dGmQ'
   
        const data = await fetch('https://stc-mgmt-portal.herokuapp.com/meeting/activeMeetings',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken

            }
        })
        const dataJson = await data.json()
        this.setState({
            data: dataJson
        })
        this.Meetcard = this.Meetcard.bind(this)
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
                    {meet.status}
                </td>
                <td>
                    <button
                        onMouseOver={(e)=>{if(meet.status === 'active'){e.target.className=styles.button}}} 
                        style ={{ background: meet.status === 'inactive' ? "grey": 'transparent linear-gradient(270deg, #a2d2ff 0%, #cdb4db 100%, #516980 100%) 0% 0% no-repeat padding-box'}}
                        onClick = {(e)=>{
                        e.preventDefault()
                        console.log(meet.roomName);
                    }}>Join Meet</button>
                </td>
            </tr>
        )
    }
    render() {
        if(Object.entries(this.state.data).length === 0)
        {
            return (
                <div>
                    Loading....
                </div>
            )
        }else{
            const {meetings} = this.state.data;
            return(
                <div className={styles.container}>
                    <table>
                        <thead>
                            <tr>
                                <th>RoomName</th>
                                <th>Meeting Started by</th>
                                <th>Status</th>
                                <th>Join Meet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {meetings.map((meet, i) =>(
                            <this.Meetcard key={i} meet={meet} />
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}
