

export default async function resetpassword(useremail){
    const data = await fetch ('https://stc-mgmt-portal.herokuapp.com/user/resetpassword', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"email": useremail})
    })
    const dataJson = await data.json();
    return dataJson.message;
}