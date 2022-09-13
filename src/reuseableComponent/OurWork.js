import React from 'react'

function OurWork(props) {
    return (
        <div className="our_work_item">
            <img src={props.image} alt="Our work" />
            <h4>{props.title}</h4>
            <p>{props.para}</p>
        </div>
    )
}

export default OurWork