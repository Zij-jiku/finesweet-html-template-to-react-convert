import React from 'react'
import { Link } from 'react-router-dom';

function BlogRc(props) {
    return (
        <div class="blog_item_one">
            <img src={props.img} alt="" />
            <h4>{props.heading}</h4>
            <p>{props.para}</p>
            <h5>{props.heading_two}</h5>
            <Link to={props.linkTo}>Read more <i class="fa-solid fa-arrow-right-long"></i></Link>
        </div>
    )
}

export default BlogRc