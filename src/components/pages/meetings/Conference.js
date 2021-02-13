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
    //setMeetingDetails({})
    return (
        <>
            {error && <h2>error</h2>}
            <div id={jitsiConfig.parentNode} style={{width:'90vw'}}>

            </div>
        </>
    )
}