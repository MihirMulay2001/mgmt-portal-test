

export default async function activemeetings(){
    const authToken = localStorage.getItem('Token')
   
    const data = await fetch('https://stc-mgmt-portal.herokuapp.com/meeting/activeMeetings',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken

        }
    })
    const dataJson = await data.json()
    return dataJson.meetings;
}