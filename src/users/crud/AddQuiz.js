import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddQuiz() {
    let navigate =useNavigate();

    const [quizzes, setQuizzes] = useState({
        title:"",
        description:"",
        tag:"",
        image:"",
    });

    const {
    title,
    description,
    tag,
    image
    }=quizzes;

    const onInputChange=(e)=>{
        setQuizzes({ ...quizzes,[e.target.name]:e.target.value });
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/quiz", quizzes)
        navigate("/")
    }
  return (
    <div>
         <div className='row'>
            <form onSubmit={(e)=>onSubmit(e)}  className='col-md-6 offset-md-3 border mt-5 rounded p-4 mt-2 shadow'>
                <h2 className='mb-3 w-100 bg-success p-3 text-white text-center rounded'>Create Quiz</h2>
                <div className="mb-3">
                    <label for="formFile" class="form-label">Input Image</label>
                    <input name='image' className="form-control" type="file" id="formFile"/> 
                </div>
                <div className='mb-3'>
                    <label className='form-label' >Title</label>
                    <input placeholder='enter title..'  name='title' value={title}  onChange={(e)=>onInputChange(e)}type='text'className='form-control border-0 border-bottom border-success '/>
                </div> 
                <div className='mb-3'>
                    <label className='form-label' >Description</label>
                    <textarea rows={3} placeholder='about the title..'  name='description' value={description}  onChange={(e)=>onInputChange(e)}type='text'className='form-control border-0 border-bottom border-success '></textarea>
                </div> 
                <div className='mb-3'>
                    <label className='form-label' >Tag</label>
                    <input placeholder='enter tag..'  name='tag' value={tag}  onChange={(e)=>onInputChange(e)}type='text'className='form-control border-0 border-bottom border-success '/>
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
