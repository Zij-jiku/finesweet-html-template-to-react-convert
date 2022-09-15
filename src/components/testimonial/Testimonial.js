import React from 'react'
import './testimonial.css';
import Slider from "react-slick";



// Slider Arrow
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, 
            width: "50px",
            height: "50px",
            lineHeight: "50px",
            fontSize: "22px",
            color: "#FFFFFF",
            textAlign: "center",
            background: "#2405F2",
            borderRadius: "50%",
            cursor: "pointer",
            transition: ".5s"
        }}
            onClick={onClick}
        >
            <i className="fa-solid fa-angle-left"></i>
        </div>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, 
            width: "50px",
            height: "50px",
            lineHeight: "50px",
            fontSize: "22px",
            color: "#FFFFFF",
            textAlign: "center",
            background: "#2405F2",
            borderRadius: "50%",
            cursor: "pointer",
            transition: ".5s",
         }}
            onClick={onClick}
        >
        <i className="fa-solid fa-angle-right"></i>
        </div>
    );
}

function Testimonial() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

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
                            <div>
                                <Slider {...settings}>
                                    <div>
                                        <h4>"The best agency we’ve worked with so far. They understand our product and are able to add new
                                            features with a great
                                            focus."</h4>
                                        <div className="testimonial_user">
                                            <img src="images/testimonial.png" alt="testimonial" />
                                            <h6>Jenny Wilson</h6>
                                            <p>Vice President</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>"The best agency we’ve worked with so far. They understand our product and are able to add new
                                            features with a great
                                            focus."</h4>
                                        <div className="testimonial_user">
                                            <img src="images/testimonial.png" alt="testimonial" />
                                            <h6>Jenny Wilson</h6>
                                            <p>Vice President</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>"The best agency we’ve worked with so far. They understand our product and are able to add new
                                            features with a great
                                            focus."</h4>
                                        <div className="testimonial_user">
                                            <img src="images/testimonial.png" alt="testimonial" />
                                            <h6>Jenny Wilson</h6>
                                            <p>Vice President</p>
                                        </div>
                                    </div>

                                </Slider>
                                {/* <div className="testimonial_arrow">
                                    
                                    
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial