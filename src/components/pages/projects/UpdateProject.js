import React, { useEffect, useState} from 'react'
import axios from "axios"
import './AddProject.css'
import UserList from "./Userlist"

const UpdateProject =({match})=> {

    const id = match.params.id
    console.log(id)
    const [description, setDescription] = useState('')
    const [users, setUsers] = useState([])
    const [response, setResponse] = useState('')
    const [selectedusers, setSelectedusers] = useState([])
    
    const authToken = localStorage.getItem('Token')
    const GetAllUsers = async() => {
      try {
        const {data} = await axios.get(`https://stc-mgmt-portal.herokuapp.com/project/updateproject/${id}`,{
        headers:{
          'auth-token': authToken
        }
      })
        
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }
    const ProjectUpdate = async() => {
        const proj = {
          description,
          users: selectedusers
        }
       
        try {
          console.log(proj)
          const res =  await axios.post("https://stc-mgmt-portal.herokuapp.com/project/updateproject", proj, {
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken
            },
        })
          setResponse(res)
        } catch (error) {
          console.log(error)
        }
      }
      const HandleChange = (userid) => {
         if(selectedusers.includes(userid)){
           const newselectedusers = selectedusers.filter(user => user!==userid)
           setSelectedusers(newselectedusers)
         } else{
           const newselectedusers = [...selectedusers, userid]
           setSelectedusers(newselectedusers)
         }
      }

      useEffect(()=>{
        GetAllUsers()
      }, [])
      useEffect(()=>{
        console.log(selectedusers)
      }, [selectedusers])
    
        return (
					<div className='container-fluid'>
						<div className='form'>
							<div className='form-group'>
							</div>
							<div className='form-group'>
								<label htmlFor='description'>Description</label>
								<input
									type='text'
									className='form-control'
									onChange={(event) => {
										setDescription(event.target.value);
									}}
								/>
							</div>
							<UserList users={users} HandleChange={HandleChange} />
							<button className='btn btn-block' onClick={ProjectUpdate}>
								  Update Project
							</button>
						</div>
					</div>
				);
}

export default UpdateProject
