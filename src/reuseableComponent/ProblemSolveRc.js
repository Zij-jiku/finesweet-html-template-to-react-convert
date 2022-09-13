import React from 'react'

function ProblemSolveRc(props) {
    return (
        <div className="problem_solve_item">
            <i className={props.icon}></i>
            <h5>{props.heading}</h5>
            <p>{props.para}</p>
        </div>
    )
}

export default ProblemSolveRc