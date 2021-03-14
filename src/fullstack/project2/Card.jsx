// This is the  file where we are going to design card so that we can easily use it  in our services file ; 

import React from "react";
import "./fullpro2.css";
import {NavLink} from "react-router-dom"

const Card = (props) =>{
    return(<>
        <div className="card">
            <div className="card_row">
                <img src={props.imgsrc} alt="card img"
                className = "card_img" />
            </div>
            <div className="card_row padding">
                <h2 className="card_title">{props.title}</h2>
                <p className="card_text">Some quick example text to build on the card title and make up the bulk of the card's content . </p>

               <NavLink exact to = "#"> <button className="card_btn"> Go Somewhere</button></NavLink>
            </div>
        </div>
    </>)
}

// exporting the file card ; 
export default Card;