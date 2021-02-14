

export default async function createmeet(roomName){
    const authToken = localStorage.getItem('Token')
   
    const data = await fetch('https://stc-mgmt-portal.herokuapp.com/meeting/createMeet',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken

        },
        body: JSON.stringify({'roomName':roomName})
    })
    const {roomValue, name} = await data.json()
    return {roomValue, name};
}