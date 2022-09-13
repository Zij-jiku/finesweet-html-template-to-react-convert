import React from 'react'
import './faq.css';
function Faq() {
    return (
        <div>
            <section className="faq">
                <div className="container">
                    <div className="faq_flex">
                        <div className="faq_title">
                            <h3>Frequently asked questions</h3>
                            <h6>Contact us for more info</h6>
                        </div>
                        <div className="faq_main">
                            <div className="faq_item">
                                <span>01</span>
                                <h5>How much time does it take?</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                            <div className="faq_item">
                                <span>02</span>
                                <h5>What is your className naming convention?</h5>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <div className="faq_item">
                                <span>03</span>
                                <h5>How much time does it take?</h5>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <div className="faq_item">
                                <span>04</span>
                                <h5>How much time does it take?</h5>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <div className="faq_item">
                                <span>05</span>
                                <h5>How much time does it take?</h5>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq