import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([ ])

    const {id} = useParams();

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers =async()=>{
            const result=await axios.get("http://localhost:8080/users");
            setUsers(result.data);
    }

    const deleteUser=async (id)=>{
        console.log('Delete User ID:', id);
          try {
            await axios.delete(`http://localhost:8080/user/${id}`);
            loadUsers();
          } catch (error) {
            console.error('Delete Request Error:', error);
          }
       
    }

  return (
    <div className='container mt-5'>
        <div className='mt-5 shadow'>
            <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user , index) =>(
                                <tr>
                                    <th scope='row' key={index}>{index+1}</th>
                                    <td> {user.name}  </td>
                                    <td> {user.username}  </td>
                                    <td> {user.email}  </td>
                                    <td>
                                         
                                        <Link to={`/viewuser/${user.id}`} className='btn btn-primary mx-2 btn-sm'>View</Link>
                                        <Link to={`/edituser/${user.id}`} className='btn btn-warning mx-2 btn-sm'>Edit</Link>
                                        <button onClick={() => deleteUser(user.id)} className='btn btn-danger mx-2 btn-sm'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>
    </div>
  )
}
