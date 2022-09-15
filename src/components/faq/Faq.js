import React, { useState } from 'react'
import './faq.css';

function Faq() {
    let [accodian , setAccodian] = useState([
        {
            title: "How much time does it take?1",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            status: true
        },

        {
            title: "How much time does it take?2",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            status: false
        },

        {
            title: "How much time does it take?3",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            status: false
        },

        {
            title: "How much time does it take?4",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            status: false
        },

        {
            title: "How much time does it take?5",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            status: false
        },
    ]);

    let handleAccodian = (id) => {
        console.log(id);

        accodian.map((item,index) => {
            if(id == index) {
                item.status = true;
                setAccodian([...accodian]);
            }else {
                item.status = false;  
                setAccodian([...accodian]);
            }
        })
    }


    return (
        <div>
            <section className="faq">
                <div className="container">
                    <div className="faq_flex">
                        <div className="faq_title">
                            <h3>Frequently asked questions</h3>
                            <h6>Contact us for more info</h6>
                        </div>
                        <div className="faq_main">

                        {accodian.map((item, index) => (
                            <div className="faq_item" onClick={() => handleAccodian(index)}>
                                <span>{index +1 >= 10 ? index+1 : `0${index+1}`}</span>
                                <h5>{item.title}</h5>
                                {item.status && <p> {item.details} </p>}
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        ))}

                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq