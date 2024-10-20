import React from 'react';
import { Link } from 'react-router-dom';
import mariamImage from '../../images/mariam.jpg';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      {/* Button for mobile view to toggle offcanvas */}
      <button className="btn btn-primary mobile-menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Offcanvas for mobile view */}
      <div className="offcanvas offcanvas-start" id="demo" tabIndex="-1" aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header">
          {/* <h5 className="offcanvas-title" id="offcanvasLabel">Menu</h5> */}
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body mobile">
          <Link className="navbar-brand" to="/">
            <img className='img' src={mariamImage} alt="logo" />
          </Link>
          <ul className="navbar-nav flex-column">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Skills">Skills</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Experience">Experience</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Work">Work</Link></li>
          </ul>
        </div>
      </div>

      {/* Full navbar for larger screens */}
      <div className="full-navbar">
        <Link className="navbar-brand" to="/">
          <img className='img' src={mariamImage} alt="logo" />
        </Link>
        <ul className="navbar-nav flex-column">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/Skills">Skills</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/Experience">Experience</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/Work">Work</Link></li>
        </ul>
      </div>
    </>
  );
}
