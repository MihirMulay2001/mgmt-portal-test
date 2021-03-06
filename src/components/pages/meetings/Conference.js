import React , {useState, useEffect} from 'react'
import {useJitsi} from 'react-jutsu'
import endmeet from '../../../api/post/endmeet'

export default function Conference(props){
    const {roomValue, name, user} = props.location.state
    const jitsiConfig = {
        roomName: roomValue,
        displayName : name,
        parentNode: 'jitsi-container',
        width: '100%',
        height: '100%',
        interfaceConfigOverwrite: {
                BRAND_WATERMARK_LINK: 'https://stcvit.in/',
                TOOLBAR_BUTTONS: [
                    'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
                    'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
                     'etherpad',  'settings', 'raisehand'
                    , 'filmstrip', 'shortcuts',
                    'tileview', 'download', 'security', 
                ],
                SHOW_CHROME_EXTENSION_BANNER: false,
                SETTINGS_SECTIONS: [ 'devices', 'language', 'moderator', 'profile', 'calendar' ],
                SHOW_BRAND_WATERMARK: false,
                SHOW_DEEP_LINKING_IMAGE: false,
                SHOW_JITSI_WATERMARK: true,
                SHOW_POWERED_BY: false,
                SHOW_PROMOTIONAL_CLOSE_PAGE: false,
            }
    }
    const {error,loading,jitsi} = useJitsi(jitsiConfig);   
    
    //setMeetingDetails({})
    return (
        <>
            {error && <h2>error</h2>}
            <div style={{width:'100%', height:'100vh'}}>
                <div id={jitsiConfig.parentNode} style={{width:'90vw', height:'90vh'}}>
                </div>
                <button style={{height: '7vh', width:'8vw'}}onClick={()=>endmeet({remove: roomValue})} >End Meet</button>
            </div>
            
        </>
    )
}