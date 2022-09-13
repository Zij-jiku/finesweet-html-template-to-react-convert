import React from 'react'
import './project.css';

function Project() {
    return (
        <div>
            <section className="project">
                <div className="container">
                    <div className="project_title">
                        <h2>View our projects</h2>
                        <div className="project_btn cmn_btn">
                            <a href="#">View More <i className="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                    <div className="project_flex">
                        <div className="project_left">
                            <img src="images/project1.png" alt="Project" />
                                <div className="project_left_overlay">
                                    <div className="project_left_overlay_text">
                                        <h5>Workhub office Webflow Webflow Design</h5>
                                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
                                        <div className="project_overly_btn cmn_btn">
                                            <a href="#">View Project <i className="fa-solid fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="project_right">
                            <div className="project_right_inner">
                                <img src="images/project2.png" alt="Project" />
                                    <div className="project_right_overlay">
                                        <div className="project_right_overlay_text">
                                            <h5>Unisaas Website Design</h5>
                                            <div className="project_overly_btn cmn_btn">
                                                <a href="#">View Portfolio <i className="fa-solid fa-arrow-right-long"></i></a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="project_right_inner">
                                <img src="images/project3.png" alt="Project" />
                                    <div className="project_right_overlay">
                                        <div className="project_right_overlay_text">
                                            <h5>Unisaas Website Design</h5>
                                            <div className="project_overly_btn cmn_btn">
                                                <a href="#">View Portfolio <i className="fa-solid fa-arrow-right-long"></i></a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project