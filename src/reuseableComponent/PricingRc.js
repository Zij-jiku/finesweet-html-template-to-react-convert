import React from 'react'
import { Link } from 'react-router-dom'

function PricingRc(props) {
  return (
    <>
        <div className="first_pricinf_list">
                <div className="pricing_heading">
                    <h3>{props.dollar}</h3>
                    <span><Link to={props.link}>Get Started</Link></span>
                </div>
                <h3>{props.title}</h3>
                <p>When you’re ready to go beyond prototyping in Figma,</p>
                <div className="priceng_list_angel">
                    <div className="angel"></div>
                    <h4>All limited links</h4>
                </div>
                <div className="priceng_list_angel">
                    <div className="angel"></div>
                    <h4>Own analytics platform</h4>
                </div>
                <div className="priceng_list_angel">
                    <div className="angel"></div>
                    <h4>All limited links</h4>
                </div>
                <div className="priceng_list_angel">
                    <div className="angel angel_two"></div>
                    <h4>All limited links</h4>
                </div>
                <div className="priceng_list_angel">
                    <div className="angel angel_two"></div>
                    <h4>All limited links</h4>
                </div>
                <div className="pricing_ntn">
                    <a href=""> Get started</a>
                </div>
            </div>
    </>
  )
}

export default PricingRc