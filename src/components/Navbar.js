import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Student from '../pages/student'


export default function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link to='/' className="navbar-brand" href="#">Quiz Builder</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to='admin' className="nav-link active" aria-current="page" href="#">Admin</Link>
                </li>
                <li className="nav-item">
                <Link to='student' className="nav-link" href="#">Student</Link>
                </li>
            
            
            </ul>
            <form className="d-flex" role="search">
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
     </nav>
     
    </div>
  )
}
