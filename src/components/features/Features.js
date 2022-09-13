import React from 'react'
import ProblemSolveRc from '../../reuseableComponent/ProblemSolveRc';
import './features.css';

function Features() {
  return (
    <>
    <section id="features">
        <div class="container">
            <div class="features_flex">
                <div class="features_text">
                    <h1>All the features you need</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="features_btn">
                        <a href="#">View Pricing</a>
                        
                    </div>
                </div>
                <div class="features_img">
                    <img src="images/features_bg.png" alt="features" />
                </div>
            </div>
        </div>
    </section>

    <section id="brand-section">
        <div class="container">
            <ul class="brand_ul">
                <li>
                        <h5>100.000+</h5> 
                        <span>Figma Users</span>
                </li>
                <li>
                    <a href="">
                        <img src="images/brand1.png" alt="" />
                    </a>
                </li>

                <li>
                    <a href="">
                        <img src="images/brand2.png" alt="" />
                    </a>
                </li>

                <li>
                    <a href="">
                        <img src="images/brand3.png" alt="" />
                    </a>
                </li>


                <li>
                    <a href="">
                        <img src="images/brand4.png" alt="" />
                    </a>
                </li>


                <li>
                    <a href="">
                        <img src="images/brand5.png" alt="" />
                    </a>
                </li>
            </ul>
        </div>
    </section>


    <div id="working">
        <div class="container">
            <div class="working_title">
                <h2>The benefits of working with our team</h2>
            </div>
            <div class="working_flex">
            <ProblemSolveRc icon = "fa-solid fa-users" heading="Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
            <ProblemSolveRc icon = "fa-solid fa-circle-check" heading="Two Free Revision Round" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
            <ProblemSolveRc icon = "fa-solid fa-pen-ruler" heading="Template Customization" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
            </div>
        </div>
    </div>

    <section id="agency1">
        <div class="container">
            <div class="agency_flex">
                <div class="agency_title">
                    <h5>Use Client-first</h5>
                    <h3>Top agencies and freelancers <br /> around the world use <br /> Client-first </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <div class="agency_containt">
                   <img src="images/agency1.png" class="padding-left" alt="agency1.png" />
                </div>
            </div>
        </div>
    </section>

     <section id="agency2">
        <div class="container">
            <div class="agency_flex">
                <div class="agency_containt">
                    <img src="images/agency2.png" class="padding-right" alt="agency2.png" />
                 </div>

                <div class="agency_title">
                    <h5>Free Revision Rounds</h5>
                    <h3>Get free Revisions and one week <br /> of free maintenance </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
               
            </div>
        </div>
    </section>

     <section id="agency3">
        <div class="container">
            <div class="agency_flex">
                <div class="agency_title">
                    <h5>24/7 Support</h5>
                    <h3>Working with us, you will be <br /> getting 24/7 priority support </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <div class="agency_containt">
                   <img src="images/agency3.png" class="padding-left" alt="agency3.png" />
                </div>
            </div>
        </div>
    </section>

     <section id="agency4">
        <div class="container">
            <div class="agency_flex">
                <div class="agency_containt">
                    <img src="images/agency4.png" class="padding-right" alt="agency4.png" />
                 </div>

                <div class="agency_title">
                    <h5>Quick Delivery</h5>
                    <h3>Guranteed 1 week delivery for <br /> standard five pager website</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
               
            </div>
        </div>
    </section>

     <section id="faq">
        <div class="container">
            <div class="faq_flex">
                <div class="faq_title">
                    <h3>Frequently asked questions</h3>
                    <h6>Contact us for more info</h6>
                </div>
                <div class="faq_main">
                    <div class="faq_item">
                        <span>01</span>
                        <h5>How much time does it take?</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div class="faq_item">
                        <span>02</span>
                        <h5>What is your class naming convention?</h5>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div class="faq_item">
                        <span>03</span>
                        <h5>How much time does it take?</h5>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div class="faq_item">
                        <span>04</span>
                        <h5>How much time does it take?</h5>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div class="faq_item">
                        <span>05</span>
                        <h5>How much time does it take?</h5>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Features