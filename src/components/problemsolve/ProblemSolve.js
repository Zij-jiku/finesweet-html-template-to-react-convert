import React from 'react'
import ProblemSolveRc from '../../reuseableComponent/ProblemSolveRc';
import './problemsolve.css';

function ProblemSolve() {
    return (
        <div>
            <section className="problem_solve">
                <div className="container">
                    <div className="problem_solve_title">
                        <h6>Features</h6>
                        <h2>Design that solves problems, one product at a time</h2>
                    </div>
                    <div className="problem_solve_flex">

                    <ProblemSolveRc icon = "fa-solid fa-users" heading="Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
                    <ProblemSolveRc icon = "fa-solid fa-circle-check" heading="Two Free Revision Round" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
                    <ProblemSolveRc icon = "fa-solid fa-pen-ruler" heading="Template Customization" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
                    <ProblemSolveRc icon = "fa-solid fa-comments" heading="24/7 Support" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
                    <ProblemSolveRc icon = "fa-solid fa-stopwatch" heading="Quick Delivery" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
                    <ProblemSolveRc icon = "fa-solid fa-book" heading="Hands-on approach" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProblemSolve