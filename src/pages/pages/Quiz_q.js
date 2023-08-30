import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Quiz_q() {

    const [quizzes, setQuizzes] = useState([ ])

    useEffect(()=>{
        loadQuiz();
    },[]);
  
    const loadQuiz =async()=>{
      try {
        const result=await axios.get("http://localhost:8080/quizzes");
        setQuizzes(result.data);
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <div>
      <div className='container border shadow-sm rounded my-2 d-flex justify-content-between p-2 align-items-center'>
        <div>Quizzes</div> <Link to={'/create-quiz'} className='btn btn-sm btn-outline-success'>Create</Link>
      </div>
      <div className='container mt-2 '>
          <div className='border shadow rounded p-5 grid row align-items-center d-flex'>
              {
                  quizzes.map((quiz, index)=>(

                      <div key={index} className="d-flex flex-column card m-2" style={{width: '18rem'}}>
                          <img src={quiz.image == null || 'https://img.icons8.com/ios/100/image--v1.png'}  className="card-img-top" height={'200px'} alt="..."/>
                          <div className="card-body">
                              <h5 className="h6 text-truncate">{quiz.title}</h5>
                              <p className="card-text text-truncate"> {quiz.description}</p>

                              <div className='d-flex justify-content-between border-0 border-top border-gray pt-3 '>
                                  <button className='btn-sm btn-outline-success btn' >Create Questionaire</button>
                                  <button className='btn-sm btn-outline-primary btn'>View</button>
                              </div> 
                          </div>
                      </div>
                  ))
              }

          </div>
      </div>
    </div>


  );
}

export default Quiz_q;