import React from 'react'

export default function EditQuiz_q() {
    let navigate =useNavigate();

    const {id}=useParams();

    const [questions, setQuestions] = useState({
        title:"",
        description:"",
        tag:"",
        image:""
        
    });

    const {
    title,
    description,
    tag,
    image
    }=questions;

    const onInputChange=(e)=>{
        setQuestions({ ...questions,[e.target.name]:e.target.value });
    }

    useEffect(()=>{
        loadquestion();
    }, []);

    const onSubmit=async(e)=>{
        e.preventDefault(); 
        await axios.put(`http://localhost:8080/question/${id}`,questions)
        navigate("/question")
    }

    const loadquestion=async ()=>{
        const result=await axios.get(`http://localhost:8080/question/${id}`,questions)
        setQuestions(result.data);
    }

  return (
    <div className='row'>
    <form onSubmit={(e)=>onSubmit(e)}  className='col-md-6 offset-md-3 border mt-5 rounded p-4 mt-2 shadow'>
        <h2 className='mb-3 w-100 bg-warning p-3 text-white text-center rounded'>Update Question</h2>
        <div className='mb-3'>
            <label className='form-label' >Question</label>
            <input placeholder='enter question..'  name='question' value={question}  onChange={(e)=>onInputChange(e)}type='text'className='form-control border border-success '/>
        </div> 
        <div className='mb-3'>
            <label className='form-label' >Description</label>
            <input placeholder='description of correct answer.'  name='description' value={description}  onChange={(e)=>onInputChange(e)}type='text'className='form-control border border-success '/>
        </div> 
        <div className='mb-3'>
            <label className='form-label' >Tag</label>
            <input placeholder='ex(Science, Basic Math, Human Body) etc..'  name='tag' value={tag}  onChange={(e)=>onInputChange(e)}type='text'className='form-control border-0 border-bottom border-success '/>
        </div> 
        <div className='mb-3'>
            <label className='form-label' >Option 1</label>
            <input placeholder='enter option 1..'  name='option1' value={option1}  onChange={(e)=>onInputChange(e)}type='text'className='form-control border-0 border-bottom border-success '/>
        </div> 
        <div className='mb-3'>
            <label className='form-label' >Option 2</label>
            <input placeholder='enter option 2..'  name='option2' value={option2}  onChange={(e)=>onInputChange(e)}type='text'className='form-control border-0 border-bottom border-success '/>
        </div> 
        <div className='mb-3'>
            <label className='form-label' >Option 3</label>
            <input placeholder='enter option 3..'  name='option3' value={option3}  onChange={(e)=>onInputChange(e)}type='text'className='form-control border-0 border-bottom border-success '/>
        </div> 
        <div className='mb-3'>
            <label className='form-label' >Option 4</label>
            <input placeholder='enter option 4..'  name='option4' value={option4}  onChange={(e)=>onInputChange(e)}type='text'className='form-control border-0 border-bottom border-success '/>
        </div>

        <div className='mb-3'>
            <label className='form-label' >Correct Answer</label>
            <input placeholder='enter correct answer..'  name='correctanswer' value={correctanswer}  onChange={(e)=>onInputChange(e)}type='text'className='form-control border-0 border-bottom border-success '/>
        </div> 

        <div className='d-flex'>
            <input type='submit' value="Update" className='btn btn-outline-warning mx-1 w-100'/>
            <Link to='/question' className='btn btn-outline-danger mx-1 w-100'>Cancel</Link>
        </div>
    </form>
</div> 
  )
}
