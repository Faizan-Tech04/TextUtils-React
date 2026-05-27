import React from 'react'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
  
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
 {/* < a className="navbar-brand" href="#">{props.title}</a> */}
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <Link className="nav-link active" to="/">Home</Link>
      </li>
     {/* <a className="nav-item" aria-current="page" href="#">Home </a> */}

      <li className="nav-item">
        <Link className="nav-link" to="/about">About
          {props.aboutText}
        </Link>
      </li>
      {/* <a li className="nav-item" href="/about">About
          {props.aboutText}
        </a> */}
      
    </ul>
    {/* <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary" type="submit">Search</button> 
      </form> */}


<div className="d-flex mx-3">
 <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('blue')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
 <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('red')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
 <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('green')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
 
</div>



    
    <div className={`form-check form-switch ${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox"  id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
</div>
  
  </nav>
 
    
    )
  }


Navbar.propTypes = {
            title: PropTypes.string.isRequired,
            aboutText: PropTypes.string.isRequired
}

  Navbar.defaultProps = {
              title: 'Set title here',
              aboutText: 'About' };
 