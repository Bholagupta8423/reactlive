// This is the card of the education part  here we are going to design ;

import React from "react";
import "./index.css";

const Educationcard = (props) =>{
    return(<>
        <div className="education_card">
                <h4>{props.year}</h4>
                <h3>{props.class}</h3>
                <p>{props.text} </p>
            </div>
    </>)
}

// exporting the educationcard file 
export default Educationcard ;