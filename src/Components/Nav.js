import React from 'react'
import './Nav.css';
import logo from "../assets/logo2.png"

function Nav() {
    const date = new Date().toLocaleDateString();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = new Date().getDay();

  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top navv">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={logo} alt="" className='logoo'/>
    </a>
    <button className="navbar-toggler navbtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon navicon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 navi">
        <li className="nav-item navli">
          <a className="nav-link active" aria-current="page" href="#">category 1</a>
        </li>

        <li className="nav-item navli">
          <a className="nav-link active" aria-current="page" href="#">category 2</a>
        </li>

        <li className="nav-item navli">
          <a className="nav-link active" aria-current="page" href="#">category 3</a>
        </li>

        <li className="nav-item navli">
          <a className="nav-link active" aria-current="page" href="#">category 4</a>
        </li>
        <li className="nav-item navli">
          <a className="nav-link active" aria-current="page" href="#">category 5</a>
        </li>
        
        
        
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button> */}

        <div className='date px-5'>
            {days[day]}
            <br />
            {date}
        </div>
      </form>
    </div>
  </div>
</nav>
    
  )
}

export default Nav
