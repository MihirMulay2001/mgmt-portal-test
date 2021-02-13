import React , {useState} from 'react'
import {useJitsi} from 'react-jutsu'

export default function Conference({meetingDetails, setMeetingDetails}){
    const jitsiConfig = {
        roomName: meetingDetails.roomValue,
        displayName : meetingDetails.name,
        parentNode: 'jitsi-container',
        width: '100%',
        height: '100%'
    }
    const {loading, error, jitsi} = useJitsi(jitsiConfig);
    setMeetingDetails({})
    return (
        <>
            {error && <h2>error</h2>}
            <div id={jitsiConfig.parentNode} style={{width:'90vw'}}>

            </div>
        </>
    )
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

