// here we are going to define the projec card of this project which will be used in the project.jsx file 

import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom"


const Projectcard = (props) => {
    return (<>
        <div className="project_card">
            <div className="projectimg">
            <div className="project_img">
                <img src={props.img1} alt="design.img" />
                <img src={props.img2} alt="design.img" />
                <img src={props.img3} alt="design.img" />
                <img src={props.img4} alt="design.img" />
                <img src={props.img5} alt="design.img" />
                
            </div>
            <h2>{props.title}</h2>
            </div>

            <div className="project_text">
                <h3>{props.text}</h3>
                <NavLink to={props.link} exact className="project_btn">Go Forward</NavLink>
            </div>
        </div>
    </>)
}

// exporting the project card ;
export default Projectcard;