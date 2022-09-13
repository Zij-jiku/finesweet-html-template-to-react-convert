import React from 'react'
import './testimonial.css';

function Testimonial() {
    return (
        <div>
            <section className="testimonial">
                <div className="container">
                    <div className="testimonial_flex">
                        <div className="testimonial_title">
                            <h3>What our clients say about us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                        </div>
                        <div className="testimonial_containt">
                            <h4>"The best agency we’ve worked with so far. They understand our product and are able to add new
                                features with a great
                                focus."</h4>
                            <div className="testimonial_user">
                                <img src="images/testimonial.png" alt="testimonial" />
                                    <h6>Jenny Wilson</h6>
                                    <p>Vice President</p>
                            </div>
                            <div className="testimonial_arrow">
                                <i className="fa-solid fa-angle-left"></i>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial