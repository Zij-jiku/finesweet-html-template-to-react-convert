import React from 'react'
import { Link } from 'react-router-dom';
import './banner.css';
function Banner() {
  return (
    <div>
        <section className="banner">
        <div className="container">
            <div className="banner_flex">
                <div className="banner_text">
                    <h1>Building stellar websites for early startups</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className="banner_btn">
                        <Link to="/my-portfolio">View our work</Link>
                        <Link to="/price-plan">View Pricing <i className="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                </div>
                <div className="banner_img">
                    <img src="images/banner.png" alt="Banner" />
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Banner