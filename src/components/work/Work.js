import React from 'react'
import OurWork from '../../reuseableComponent/OurWork';
import './work.css';

function Work() {
    return (
        <div>
            <section className="our_work">
                <div className="container">
                    <div className="our_work_flex">
                        <div className="our_work_text">
                            <h2>How we work</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className="our_work_btn cmn_btn">
                                <a href="#">Get in touch with us<i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                        <div className="our_work_item_main">
                            <div className="our_work_item_main_flex">
                               <OurWork title = "Strategy" image = "images/our-work1.png" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                               <OurWork title = "Wireframing" image = "images/our-work2.png" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                               <OurWork title = "Design" image = "images/our-work3.png" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                               <OurWork title = "Development" image = "images/our-work4.png" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Work