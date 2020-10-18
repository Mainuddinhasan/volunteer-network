import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../resources/logos/Group 1329.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a  href="#"><img className="nav-img" src={Logo} alt=""></img></a>
        
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link mr-5" href="/home">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link mr-5" href="/donation">Donation</a>
            </li>
            
            <li className="nav-item active">
              <a className="nav-link mr-5" href="/login">Login</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link mr-5" href="/blog">Blog</a>
            </li>
          </ul>
          
        </div>
        <form className="form-inline">
        {/* <Link to={`/registration/${id}`}><button className="btn btn-outline-success mr-5" type="button">Register</button></Link> */}
        <Link to="/registration"><button className="btn btn-outline-dark mr-5" type="button">Admin</button></Link>
    </form>
      </nav>
    );
};

export default Navbar;