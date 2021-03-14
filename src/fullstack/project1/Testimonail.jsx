// here we are going to design the testimonial section ;

import React from "react";
import "./project1.css";
import StarHalfIcon from '@material-ui/icons/StarHalf';

import StarIcon from '@material-ui/icons/Star';
import img1 from "./fullpro1img/user-1.png"


const Testimonail = (props) =>{
    return(<>
    <div className="Testimonialx_card">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti tenetur est laborum nostrum iste sequi .</p>
        <ul>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarHalfIcon/>
        </ul>

        <img src={props.img} alt="user.jpg"/>
        <h3>{props.name}</h3>

    </div>
    </>)
}

// exporting the testimonail part of the website ;
export default Testimonail;