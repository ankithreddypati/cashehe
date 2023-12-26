// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Cashehe
        </Link>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-links">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/loginandregister" className="navbar-links">About</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
