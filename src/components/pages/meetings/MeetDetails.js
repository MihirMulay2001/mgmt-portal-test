import React , {Component} from 'react'
import styles from '../../../assets/css/modules/MeetDetails.module.css'

export default class Meetdetails extends Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
        //this.Meetingcard = this.Meetingcard.bind(this)
    }
     async componentDidMount(){
        const authToken = localStorage.getItem('Token')
   
        const data = await fetch('https://stc-mgmt-portal.herokuapp.com/meeting/activeMeetings',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken

            }
        })
        const dataJson = await data.json()
        this.setState({
            data: dataJson.meetings
        })
    }
    MeetingCard({item}){
        return(
            <div className={styles.card}>
                <div>
                    <h3>Topic: </h3>{item.roomName}
                </div>
                <div>
                    <h3>Hosted by:</h3>{item.meetingStartedBy}
                </div>
                
            </div>
        )
    }
    render() {
        if((this.state.data).length === 0)
        {
            return (
                <div>
                    Loading....
                </div>
            )
        }else{
        return (
            <div className={styles.container}>
                {
                    this.state.data.map((item, i)=>{
                        return(
                            <this.MeetingCard key={i} item={item}/>
                        )
                    })
                }
            </div>
        )
    }
}
}

