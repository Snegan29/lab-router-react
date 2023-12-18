
import React from 'react';
// import './App.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div id='navbar'>
        <h1>Kalvium</h1>
        <ul className='nav-links'>
            <li className='link'><Link  to="/home"> Home</Link></li>
            <li className='link'><Link  to="/contact">Contact</Link></li>
            <li className='link'><Link  to="/about">About</Link></li>
        </ul>
    </div>
  );
}

export default Navbar;
