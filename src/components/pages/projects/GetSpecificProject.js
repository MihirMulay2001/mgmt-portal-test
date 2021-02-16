import React, {useState, useEffect} from 'react'
import axios from "axios"

const GetSpecificProject = ({match}) => {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(true)
    const id = match.params.id
    const authToken = localStorage.getItem('Token')
    const Fetch =async() => {
        const {data} = await axios.get(`https://stc-mgmt-portal.herokuapp.com/project/getproject?projectId=${id}`, {
            headers: {
               'auth-token': authToken
            }
        }) 
        setResponse(data)
        setLoading(false)
    }
    useEffect(()=>{
        Fetch()
    }, [])
    console.log(response[0])
    if(!loading){
        return(
            <div className="container">
                <h3 className="text-center">{response[0].description}</h3>
                <h5 className="text-center">Project started on: {response[0].startDate}</h5>
                <h5 className="text-center">Project deadline: {response[0].endDate}</h5>
                <h5 className="text-center">People involved: {response[0].users.map(user => <p className="text-center">{user.name}</p>)}</h5>
            </div>
        ) 
    } else{
        return(
            <h1 className="text-center">Loading</h1>
        )
    }
}

export default GetSpecificProject
