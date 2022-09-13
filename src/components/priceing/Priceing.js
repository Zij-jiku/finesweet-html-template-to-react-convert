import React from 'react';
import PricingRc from '../../reuseableComponent/PricingRc';
import './priceing.css';

function Priceing() {
    return (
        <div>
            <div className="priceng_plan">
                <div className="container">
                    <div className="priceng_plan_heading">
                        <h3>Our Pricing Plans</h3>
                        <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without
                            coding them.</p>
                    </div>
                    <div className="pricing_details">
                        <PricingRc dollar = "$299" title ="Per Design" link ="/price-plan" />
                        <PricingRc dollar = "$299" title ="Per Design" link ="/price-plan" />
                        <PricingRc dollar = "$299" title ="Per Design" link ="/price-plan" />
                    </div>
                </div>
            </div>

            <div className="frequently" id="frequenty">
                <div className="container">
                    <div className="frequently_part">
                        <div className="frequently_first">
                            <h3>Frequently <br/> asked questions</h3>
                            <a href="">Contact us for more info</a>
                        </div>
                        <div className="frequently_second_part">
                            <h4>01 <span className="fre_text">How much time does it take?</span> <span className="plus"><i
                                className="fa-solid fa-xmark"></i></span></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna
                                aliqua.</p>
                            <h4 className="frequently_two">02 <span className="fre_text">How much time does it take?</span> <span
                                className="plus"><i className="fa-solid fa-plus"></i></span></h4>

                            <h4 className="frequently_two">03 <span className="fre_text">How much time does it take?</span> <span
                                className="plus"><i className="fa-solid fa-plus"></i></span></h4>

                            <h4 className="frequently_two">04 <span className="fre_text">How much time does it take?</span> <span
                                className="plus"><i className="fa-solid fa-plus"></i></span></h4>

                            <h4 className="frequently_two">04 <span className="fre_text">How much time does it take?</span> <span
                                className="plus"><i className="fa-solid fa-plus"></i></span></h4>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Priceing