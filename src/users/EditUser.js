import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate =useNavigate();

    const {id}=useParams();

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    });

    const {name, username, email}=user;

    const onInputChange=(e)=>{
        setUser({ ...user,[e.target.name]:e.target.value });
    }

    useEffect(()=>{
        loadUser()
    }, []);

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/")
    }

    const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`,user)
        setUser(result.data);
    }

  return (
    <div>
        <div className='row'>
            <form onSubmit={(e)=>onSubmit(e)}  className='col-md-6 offset-md-3 border mt-5 rounded p-4 mt-2 shadow'>
                <h2 className='mb-3 w-100 bg-warning p-3 text-white rounded'>EDIT QUIZ TITLE</h2>
                <div className='mb-3'>
                    <label className='form-label' >Name</label>
                    <input name='name' value={name}  onChange={(e)=>onInputChange(e)}type='text' placeholder='Enter your name' className='form-control border-0 border-bottom border-success '/>
                </div> 
                <div className='mb-3'>
                    <label className='form-label'>Username</label>
                    <input name='username' value={username}  onChange={(e)=>onInputChange(e)}type='text' placeholder='Enter your username' className='form-control border-0 border-bottom border-success '/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input name='email' value={email}  onChange={(e)=>onInputChange(e)}type='email' placeholder='Enter your email' className='form-control border-0 border-bottom border-success '/>
                </div>
                <div className='d-flex'>
                    <input type='submit' value="Update" className='btn btn-outline-warning mx-1 w-100'/>
                    <Link to='/' className='btn btn-outline-danger mx-1 w-100'>Cancel</Link>
                </div>
            </form>
        </div>
    </div>
  )
}
