

export default async function joinmeet ({roomName}){
    console.log(roomName);
    const authToken = localStorage.getItem('Token');
    const data = await fetch(`https://stc-mgmt-portal.herokuapp.com/meeting/joinMeet?roomName=${roomName}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            }
        })
    const dataJson = await data.json()
    console.log(dataJson);
    return dataJson;
}