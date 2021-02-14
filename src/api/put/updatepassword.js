

export default async function updatepassword(values){
    const data = await fetch ('https://stc-mgmt-portal.herokuapp.com/user/updatepassword', {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    })
    const dataJson = await data.json();
    return dataJson.message;
}