
import React, { Component } from 'react'

export default class Conference extends Component {
    constructor(props){
        super(props);
        this.roomDetails = props.props
    }
    // componentDidMount(){
    //     const script = document.createElement("script");
    //     script.async = true;
    //     script.src = "https://meet.jit.si/external_api.js";
    //     document.getElementById('jitsi-meet-conf-container').appendChild(script)
    //     const domain = 'meet.jit.si'
    //     const options = {
    //     roomName: 'mihiristhebest',
    //     width: '100%',
    //     height: '100%',
    //     parentNode: document.querySelector('#jitsi-meet-conf-container'),
    //     userInfo: {
    //         displayName: 'mihir'
    //         }
    //     }
    //     const api = new JitsiMeetExternalAPI(domain , options);
    //     console.log(api);
    // }

    render() {
        
        console.log(this);
        return (
        <>
            <div id="jitsi-meet-conf-container" style={{height: "100vh"}}></div>
        </>
    )
    }
}
