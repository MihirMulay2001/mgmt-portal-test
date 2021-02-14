

export default async function endmeet(values){
    const authToken = localStorage.getItem('Token')
    const data = await fetch ('https://stc-mgmt-portal.herokuapp.com/meeting/createMeet/endMeet', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token' : authToken
        },
        body: JSON.stringify(values)
    })
    alert('Meeting status set to inactive')
}