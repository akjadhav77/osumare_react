import React from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='container navbar_items'>
        <div className='main_logo'>
          <img src='./assets/images/asset_0.png' alt="" />
        </div>
        
        <ul className='nav_menu'>
            <li>Home</li>
            {/* <li>About</li> */}
            <li>Digital Marketing Services</li>
            <li>Technology Services</li>
            <li>Branding Services</li>
            <li>Clients</li>
            <li>Testimonials</li>
        </ul>

    </nav>
  )
}

export default NavBar