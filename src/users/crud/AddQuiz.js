import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddQuiz() {
    let navigate =useNavigate();

    const [quizzes, setQuizzes] = useState({
        title:"",
        description:"",
        tag:"",
        image:null,
    });

    const {
    title,
    description,
    tag,
    image
    }=quizzes;

    const onInputChange = (e) => {
        if (e.target.name === 'image') {
          // If the input is for the image, set the image property in state
          setQuizzes({ ...quizzes, [e.target.name]: e.target.files[0] });
        } else {
          setQuizzes({ ...quizzes, [e.target.name]: e.target.value });
        }
      };

    const onSubmit=async(e)=>{
        e.preventDefault();
        // Create a FormData object to send the image file
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('tag', tag);
        formData.append('image', image);
    
        try {
          await axios.post("http://localhost:8080/quiz", formData, {
            headers: {
              'Content-Type': 'multipart/form-data', // Set the content type for FormData
            },
          });
          navigate("/");
        } catch (error) {
          console.error(error);
        }
    }
  return (
    <div>
         <div className='row'>
            <form onSubmit={(e)=>onSubmit(e)}  className='col-md-6 offset-md-3 border mt-5 rounded p-4 mt-2 shadow'>
                <h2 className='mb-3 w-100 bg-success p-3 text-white text-center rounded'>Create Quiz</h2>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Input Image</label>
                    <input name='image' className="form-control" type="file" id="formFile" onChange={(e) => onInputChange(e)} />
                    {image && <img src={URL.createObjectURL(image)} className='rounded border p-1' alt="Selected" style={{ marginTop: '10px', maxWidth: '100%' }} />}
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
