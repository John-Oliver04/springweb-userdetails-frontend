
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar_q from './layout/question/Navbar_q';
import Home_q from './pages/pages/Home_q';
import AddQuestion from './users/crud/AddQuestion';
import EditQuestion from './users/crud/EditQuestion';
import Question_q from './pages/pages/Question_q';
import AddQuiz from './users/crud/AddQuiz';


function App() {

  return (
    <div className="App"> 
        <Router>
          <Navbar_q/>
          <Routes>
            <Route exact path="/" element={<Home_q/>}/>
            <Route exact path="/question" element={<Question_q/>}/>
            <Route exact path="/create-question" element={<AddQuestion/>}/>
            <Route exact path="/create-quiz" element={<AddQuiz/>}/>
            <Route exact path="/edit-question/:id" element={<EditQuestion/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
