// This is the menu bar of the website which we are going to design 

import React, { useState } from "react";
import "./fullpro2.css";
import {NavLink} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';

const Menu = () =>{

    const [menu , setMenu] = useState("menu_link")
    const showMenu = () =>{
       if (menu === "menu_link"){
           setMenu("menu2_link")
       }
       else if (menu === "menu2_link"){
           setMenu("menu_link")
       }
    }
    
    return(<>
    <div className="navs_container">
        <div className="navbarpro2">
            <h2 className="logo">BholaWeb</h2>
            <div className="link"  >

            <MenuIcon className= "menu_icon" onClick = {showMenu}/>

                <NavLink to = "/project/fullstack/project2/home" exact activeClassName ="active_menu" className ={menu}>Home</NavLink>
                
                <NavLink to = "/project/fullstack/project2/service" exact activeClassName ="active_menu" className = {menu}>Services</NavLink>

                <NavLink to = "/project/fullstack/project2/about" exact activeClassName ="active_menu" className = {menu}>About</NavLink>
                <NavLink to = "/project/fullstack/project2/contact" exact activeClassName ="active_menu" className = {menu}>Contact</NavLink>
               
            </div>
            
        </div>
       
         

        </div>
    </>)
}

// exporting the menu bar ;
export default Menu;