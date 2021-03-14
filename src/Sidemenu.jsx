// This is the side menu which we are going to design here 


import React from "react";
import "./index.css";
import {NavLink} from "react-router-dom";


const Sidemenu = (props) =>{
   
    return (<>
        <div className={props.slide}  >
            <NavLink exact to = "/" activeClassName = "active_class"  className="navlink" >Home</NavLink>
            <NavLink exact to = "/about" activeClassName = "active_class"  className="navlink" >About</NavLink>
            <NavLink exact to = "/services" activeClassName = "active_class"  className="navlink" >Services</NavLink>
            <NavLink exact to = "/project" activeClassName = "active_class"  className="navlink" >Projects</NavLink>
            <NavLink exact to = "/contact" activeClassName = "active_class"  className="navlink" >Contact</NavLink>
        </div>
    </>)
}

// exporting the component ;
export default Sidemenu;