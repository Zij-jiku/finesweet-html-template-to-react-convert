import React from 'react';
import { Link } from 'react-router-dom';
import NavbarRc from '../../reuseableComponent/NavbarRc';
import './navbar.css';

function Navbar() {
  return (
    <nav className="nav">
    <div className="container">
        <div className="nav_main">
            <div className="logo">
                <Link to="/">
                    <img src="images/logo.png" alt="logo" />
                </Link>
            </div>
            <div className="mav_item">
                <ul>
                    <NavbarRc link ="/" navName ="Home" />
                    <NavbarRc link ="/about-us" navName ="About Us" />
                    <NavbarRc link ="/features" navName ="Features" />
                    <NavbarRc link ="/price-plan" navName ="Pricing" />
                    <NavbarRc link ="/policy-us" navName ="FAQ" />
                    <NavbarRc link ="/blog-page" navName ="Blog" />
                    <NavbarRc className ="nav_btn" link ="/contact-us" navName ="Contact us" /> 
                </ul>
            </div>
            <div>

            </div>
        </div>
    </div>
</nav>
  )
}

export default Navbar