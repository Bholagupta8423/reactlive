// here we are going to design the featured products card for the in our home page of this website ;

import React from 'react';
import "./project1.css";
import {NavLink} from "react-router-dom";

import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Featurecard = (props) => {
    return (<>
       <NavLink exact to ={props.link} className="linkx"> 
       <div className="productsx">
            <div className="productsx_img">
                <img src={props.img} alt="products.img" />
            </div>
            <div className="productsx_text">
                <h4>{props.text}</h4>
                <ul>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                </ul>
                <p>{props.price}</p>

            </div>
        </div>
        </NavLink>
    </>)
}

// exporting the featured products card ;
export default Featurecard;