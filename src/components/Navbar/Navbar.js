import React from 'react';
import Logo from '../../resources/logos/Group 1329.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a  href="#"><img className="nav-img" src={Logo} alt=""></img></a>
        
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link mr-5" href="#">Donation</a>
            </li>
            
            <li className="nav-item active">
              <a className="nav-link mr-5" href="#">Events</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link mr-5" href="#">Blog</a>
            </li>
          </ul>
          
        </div>
        <form className="form-inline">
    <button className="btn btn-outline-success mr-5" type="button">Register</button>
    <button className="btn btn-outline-dark mr-5" type="button">Admin</button>
    {/* <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button> */}
    </form>
      </nav>
    );
};

export default Navbar;