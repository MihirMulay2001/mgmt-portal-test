

export const createmeet = async (roomName) =>{
    const authToken = localStorage.getItem('Token')
   
    const data = await fetch('https://stc-mgmt-portal.herokuapp.com/user/getuser',{
        method: 'GET',
        headers: {
            'auth-token': authToken
        }
    })
    const {name} = await data.json()
    return ({userName : name});
}