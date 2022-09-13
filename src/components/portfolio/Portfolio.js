import React from 'react'
import { Link } from 'react-router-dom';
import './portfolio.css';

function Portfolio() {
    return (
        <>
            <div className="portfolio">
                <div className="container">
                    <div className="portfolio_part">
                        <div className="priceng_plan_heading portfolio_head">
                            <h5>What we created</h5>
                            <h3>Our Pricing Plans</h3>
                            <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life —
                                without
                                coding them.</p>
                            <div className="footer_two_icons portfolio_icons">
                                <a href=""><i className="fa-brands fa-facebook"></i></a>
                                <a href=""><i className="fa-brands fa-instagram"></i></a>
                                <a href=""><i className="fa-brands fa-twitter"></i></a>
                                <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="workout">
                <div className="container">
                    <div className="workout_head">
                        <button>All</button>
                        <button>UI Design</button>
                        <button>Webflow Design</button>
                        <button>Figma Design</button>
                    </div>
                    <div className="workout_plan">
                        <div className="workout_plan_one">
                            <div className="workout_img_part">
                                <img src="images/portfolio1.png" alt="" />
                            </div>
                            <h3>Template 1</h3>
                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
                                twinkle.</p>
                            <a href="">View Portfolio <span><i className="fa-solid fa-arrow-right-long"></i></span></a>
                        </div>
                        <div className="workout_plan_one">
                            <div className="workout_img_part worout_img_two">
                                <img src="images/portfolio2.png" alt="" />
                            </div>
                            <h3>Template 2</h3>
                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
                                twinkle.</p>
                            <a href="">View Portfolio <span><i className="fa-solid fa-arrow-right-long"></i></span></a>
                        </div>
                    </div>
                    <div className="workout_plan workout_plan_two">
                        <div className="workout_plan_one">
                            <div className="workout_img_part worout_img_three">
                                <img src="images/portfolio3.png" alt="" />
                            </div>
                            <h3>Template 3</h3>
                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
                                twinkle.</p>
                            <a href="">View Portfolio <span><i className="fa-solid fa-arrow-right-long"></i></span></a>
                        </div>
                        <div className="workout_plan_one">
                            <div className="workout_img_part worout_img_four">
                                <img src="images/portfolio4.png" alt="" />
                            </div>
                            <h3>Template 4</h3>
                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
                                twinkle.</p>
                            <a href="">View Portfolio <span><i className="fa-solid fa-arrow-right-long"></i></span></a>
                        </div>
                    </div>
                    <div className="workout_plan workout_plan_two">
                        <div className="workout_plan_one">
                            <div className="workout_img_part worout_img_five">
                                <img src="images/portfolio5.png" alt="" />
                            </div>
                            <h3>Template 5</h3>
                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
                                twinkle.</p>
                            <a href="">View Portfolio <span><i className="fa-solid fa-arrow-right-long"></i></span></a>
                        </div>
                        <div className="workout_plan_one">
                            <div className="workout_img_part worout_img_four">
                                <img src="images/portfolio6.png" alt="" />
                            </div>
                            <h3>Template 6</h3>
                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
                                twinkle.</p>
                            <a href="">View Portfolio <span><i className="fa-solid fa-arrow-right-long"></i></span></a>
                        </div>
                    </div>
                    <div className="workout_last_text">
                        <div className="priceng_plan_heading portfolio_head">
                            <h3>Let's build something great together</h3>
                            <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life —
                                without
                                coding them.</p>
                            <Link to="/contact-us">Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio