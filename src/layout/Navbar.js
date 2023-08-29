import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to={`/`} className="navbar-brand" href="#">Quizzy</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}

      </ul>
      <div className="d-flex" role="Add">
         <Link className="btn btn-success" to="/adduser" type="submit">Add Quiz</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
