
export default async function signup(values){
    const data = await fetch ('https://stc-mgmt-portal.herokuapp.com/user/signup', {
        method:'POST',
        headers: {
                'Content-Type': 'application/json',
            },
        body: JSON.stringify(values)
    })
    const {message} = await data.json()
    alert(message, "Please Login with your credentials")
}