import React , {Component} from 'react'
import styles from '../../../assets/css/modules/MeetDetails.module.css'
import activemeetings from '../../../api/get/activemeetings'

export default class Meetdetails extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            submitMOM: false,
        }
    }
     async componentDidMount(){
        const dataJson = await activemeetings();
        this.setState({
            data: dataJson
        })
    }
    MeetingCard({item}){
        return(
            <div className={styles.card}>
                <div>
                    <div>
                    <h3>Topic: </h3>{item.roomName}
                    </div>
                    <div>
                        <h3>Hosted by:</h3>{item.meetingStartedBy}
                    </div>
                </div>
                <div>
                    {
                        typeof(item.mom)!== 'undefined' 
                        ? <><h4>MOM:</h4><p>{item.mom}</p></> 
                        : <><h4>Enter the MOM:</h4><textarea></textarea><button type="button">Submit MOM</button></>
                    }
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

