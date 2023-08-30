import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Question_q() {

  const [questions, setQuestions] = useState([ ])

  useEffect(()=>{
      loadQuestion();
  },[]);

  const loadQuestion =async()=>{
    try {
      const result=await axios.get("http://localhost:8080/questions");
      console.log(result.data);
      setQuestions(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  const deleteQuestion=async (id)=>{
    console.log('Delete User ID:', id);
      try {
        await axios.delete(`http://localhost:8080/question/${id}`);
        loadQuestion();
        handleDeleteClose();
      } catch (error) {
        console.error('Delete Request Error:', error);
      }
   
}

  const [show, setDelete] = useState(false);

  const handleDeleteClose = () => setDelete(false);
  const handleDeleteShow = () => setDelete(true);

  return (
    <div className='container  mt-5 '>
        <div className='w-100 '>
            <ul className="list-group position-relative shadow">
                <li className="list-group-item active d-flex justify-content-between align-items-center" aria-current="true">
                  <div>Questions</div> <Link to={`/create-question`} className='btn btn-sm btn-primary border-white shadow '>Create</Link>
                </li>
                {
                  questions.map((question, index)=>(
                    <li className="list-group-item justify-content-between d-flex align-items-center" key={index}>
                      <div className='d-flex'>
                        <small className='mx-2'>{index+1}</small>
                        <div className='d-flex flex-column'>

                          <Link to={`/edit-question/${question.id}`} className='fs-6 '>{question.question}</Link>
                          <div>
                            <span className="badge text-bg-secondary"> {question.tag} </span>
                          </div> 
                        </div>
                      </div>

                      <div>
                        <button onClick={handleDeleteShow} className='btn btn-sm btn-outline-danger p-0 px-2 pb-1 shadow rounded-circle'>x</button>
                      </div>
                      <Modal show={show} onHide={handleDeleteClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Delete</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Do you want to delete!</Modal.Body>
                        <Modal.Footer>
                          <Button variant="danger" onClick={()=>deleteQuestion(question.id)}>
                            Delete
                          </Button>
                          <Button variant="secondary" onClick={handleDeleteClose}>
                            Cancel
                          </Button>
                        </Modal.Footer>
                      </Modal>

                    </li>
                  ))
                }
            </ul>

        </div>
    </div>
  )
}
