

export default async function postmom(values){
    const authToken = localStorage.getItem('Token')
    const data = await fetch ('https://stc-mgmt-portal.herokuapp.com/meeting/postMOM', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken
        },
        body: JSON.stringify(values)
    })
    const dataJson = await data.json();
    alert(dataJson.message);
}