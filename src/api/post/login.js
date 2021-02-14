
export default async function login(values){
    const data = await fetch ('https://stc-mgmt-portal.herokuapp.com/user/login', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    })
    const dataJson = await data.json();
    return dataJson;
}