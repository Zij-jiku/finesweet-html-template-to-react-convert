import React from 'react'
import ProblemSolveRc from '../../reuseableComponent/ProblemSolveRc';
import './about.css';

function About() {
  return (
    <>
        <div className="about">
            <div className="container">
                <div className="about_part">
                    <div className="about_part_one">
                        <h6>About us</h6>
                        <h3>Our designs solve problems</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className="about_part_two">
                        <img src="images/group-of-people-sitting-indoors-3184360.png" alt="" />
                    </div>
                </div>
                <div className="about_our_goal">
                    <div className="about_our_goal_one">
                        <div className="about_part_one_text">
                            <h6>Who we are</h6>
                            <h3>Goal focussed</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="about_our_goal_two">
                        <div className="about_part_one_text goal">
                            <h3>Continuous improvement</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about_img_part">
                    <img src="images/man-in-blue-jacket-looking-at-white-board-7413916.png" alt="" />
                </div>
                <div className="process">
                    <div className="process_head">
                        <h3>The process we follow</h3>
                    </div>
                    <div className="proces_part">
                    <div className="process_part_one">
                        <div className="prorecess_imem"></div>
                        <div className="prorecess_img">
                            <img src="images/Line Indicator.png" alt="" />
                        </div>
                        <h4>Planning</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                    <div className="process_part_one">
                        <div className="prorecess_imem"></div>
                        <div className="prorecess_img">
                            <img src="images/Line Indicator.png" alt="" />
                        </div>
                        <h4>Planning</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                    <div className="process_part_one">
                        <div className="prorecess_imem"></div>
                        <div className="prorecess_img">
                            <img src="images/Line Indicator.png" alt="" />
                        </div>
                        <h4>Planning</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                    <div className="process_part_one">
                        <div className="prorecess_imem"></div>
                        <div className="prorecess_img">
                            <img src="images/Line Indicator.png" alt="" />
                        </div>
                        <h4>Planning</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>

        <div className="mission_about">
            <div className="container">
                <div className="mission_part">
                    <div className="mission_part_one">
                        <div className="mission_part_one_text">
                            <h6>Our Mission</h6>
                            <h3>Inspire, Innovate, Share</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laborum. Autem error eligendi velit molestias quis non nam iste ipsa similique eum, deserunt laborum, dolorem accusantium magni soluta aspernatur rerum!</p>
                        </div>
                    
                    </div>
                    <div className="mission_part_two">
                        <img src="images/a-man-standing-in-an-office-7792811.png" alt="" />
                    </div>
                </div>
                <div className="mission_part missiont_margin_top">
                    <div className="mission_part_two">
                        <img src="images/a-man-standing-in-an-office-7792811.png" alt="" />
                    </div>
                    <div className="mission_part_one">
                        <div className="mission_part_one_text">
                            <h6>Our Mission</h6>
                            <h3>Inspire, Innovate, Share</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laborum. Autem error eligendi velit molestias quis non nam iste ipsa similique eum, deserunt laborum, dolorem accusantium magni soluta aspernatur rerum!</p>
                        </div>
                    
                    </div>
                    
                </div>
            </div>
        </div>

        <div className="working">
            <div className="container">
                <div className="working_heading">
                    <h3>The benefits of working with us</h3>
                </div>
                <div class="working_flex">
            <ProblemSolveRc icon = "fa-solid fa-users" heading="Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
            <ProblemSolveRc icon = "fa-solid fa-circle-check" heading="Two Free Revision Round" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
            <ProblemSolveRc icon = "fa-solid fa-pen-ruler" heading="Template Customization" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
            </div>
            <div className="working_last_part">
                <div className="work_last_item_one">
                    <h4>100.000+</h4>
                    <h6>Finsweet Users</h6>
                </div>
                <div className="work_last_item_two">
                    <div className="work_client">
                        <img src="images/brand1.png" alt="" />
                    </div>
                    <div className="work_client">
                        <img src="images/brand2.png" alt="" />
                    </div>
                    <div className="work_client">
                        <img src="images/brand3.png" alt="" />
                    </div>
                    <div className="work_client">
                        <img src="images/brand4.png" alt="" />
                    </div>
                    <div className="work_client">
                        <img src="images/brand5.png" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className="team">
            <div className="container">
                <div className="team_part">
                    <div className="team_one_part">
                        <div className="team_img">
                            <img src="images/serious-man-3760373.png" alt="" />
                            <div className="team_img_overlay">
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            </div>
                        </div>
                        <h3>Simon Adams</h3>
                        <h4>CEO</h4>
                    </div>
                    <div className="team_one_part">
                        <div className="team_img">
                            <img src="images/serious-man-3760373.png" alt="" />
                            <div className="team_img_overlay">
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            </div>
                        </div>
                        <h3>Simon Adams</h3>
                        <h4>CEO</h4>
                    </div>
                    <div className="team_one_part">
                        <div className="team_img">
                            <img src="images/serious-man-3760373.png" alt="" />
                            <div className="team_img_overlay">
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            </div>
                        </div>
                        <h3>Simon Adams</h3>
                        <h4>CEO</h4>
                    </div>
                    <div className="team_one_part">
                        <div className="team_img">
                            <img src="images/serious-man-3760373.png" alt="" />
                            <div className="team_img_overlay">
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            </div>
                        </div>
                        <h3>Simon Adams</h3>
                        <h4>CEO</h4>
                    </div>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default About