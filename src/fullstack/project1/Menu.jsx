// in this file we are going to define the menu section of the project and here we will mangage it ;

import React from "react";
import "./project1.css";
import {NavLink} from "react-router-dom";

const Menu = (props) =>{
    return(<>
        <div className="menux_list">
            <ul className={props.class}>
                <NavLink exact to = "/project/fullstack/project1/home"><li>Home</li></NavLink>
                <NavLink exact to = "/project/fullstack/project1/products"><li>Products</li></NavLink>
                <NavLink exact to = "#"><li>About</li></NavLink>
                <NavLink exact to = "#"><li>Contact</li></NavLink>
                <NavLink exact to = "/project/fullstack/project1/login"><li>Account</li></NavLink>
            </ul>
        </div>
    </>)
}

// exporting the menu file ;
export default Menu;