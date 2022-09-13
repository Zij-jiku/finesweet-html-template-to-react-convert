import React from 'react'
import './inquiry.css';

function Inquiry() {
    return (
        <section className="inquiry">
            <div className="container">
                <div className="inquiry_flex">
                    <div className="inquiry_text" 
                        style={{
                            background: 
                            "linear-gradient(rgba(28, 30, 83, 0.5), rgba(28, 30, 83, 0.5)), url(images/inquiry-bg.png)",
                        }}
                        >
                        <h2>Building stellar websites for early startups</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna
                            aliqua ut enim.</p>
                    </div>
                    <div className="inquiry_contain">
                        <div className="inquiry_form_title">
                            <h4>Send inquiry</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore.</p>
                        </div>
                        <form className="inquiry_form" action="#">
                            <input className="name" type="text" placeholder="Your Name" />
                            <input className="email" type="email" placeholder="Email" />
                            <input className="figma_url" type="text" placeholder="Paste your Figma design URL" />
                            <input className="submit" type="submit" value="Send an Inquiry" />
                        </form>
                        <div className="inquiry_form_btn cmn_btn">
                            <router-link to="#">Get in touch with us <i className="fa-solid fa-arrow-right-long"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inquiry