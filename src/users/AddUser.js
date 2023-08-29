import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate =useNavigate();

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    });

    const {name, username, email}=user;

    const onInputChange=(e)=>{
        setUser({ ...user,[e.target.name]:e.target.value });
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
    }

  return (
    <div>
        <div className='row'>
            <form onSubmit={(e)=>onSubmit(e)}  className='col-md-6 offset-md-3 border mt-5 rounded p-4 mt-2 shadow'>
                <h2 className='mb-3 w-100 bg-success p-3 text-white rounded'>ADD QUIZ</h2>
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
                    <input type='submit' value="Save" className='btn btn-outline-success mx-1 w-100'/>
                    <Link to='/' className='btn btn-outline-danger mx-1 w-100'>Cancel</Link>
                </div>
            </form>
        </div>
    </div>
  )
}
