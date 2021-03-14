// This is the navbar of the project which we are going to use in our project ;


import React, { useState } from "react"
import "./project1.css";
import img3 from "./fullpro1img/menu.png"
import {NavLink} from 'react-router-dom'
import img1 from "./fullpro1img/logo.png"
import img2 from "./fullpro1img/cart.png"

import Menu from "./Menu";

const Navbar = () => {
    const [css, setCss] = useState("slide1")
    const slide = () => {
        if (css === 'slide1') {
            setCss('slide2')
        }
        else if (css === 'slide2') {
            setCss('slide1')
        }
    }
    return (<>

       
            <div className="nav_container">
                <Menu
                    class={css} />
                <div className="navbarx">
                    <NavLink exact to="/project/fullstack/project1/home"> <img src={img1} alt="logo.pic" /></NavLink>
                    <div className="navlistx">

                        <img src={img3} alt="menu.png"
                            className="menux"
                            onClick={slide} />
                        <ul >
                            <NavLink exact to ="/project/fullstack/project1/home" className = "link"><li>Home</li></NavLink>

                            <NavLink exact to ="/project/fullstack/project1/products" className = "link"><li>Products</li></NavLink>

                            <NavLink exact to ="#" className = "link"><li>About</li></NavLink>

                            <NavLink exact to ="#" className = "link"><li>Contact</li></NavLink>
                            
                            <NavLink exact to ="/project/fullstack/project1/login" className = "link"><li>Account</li></NavLink>

                        </ul>



                        <img src={img2} alt="cart.png" className="cart" />
                    </div>


                </div>
            </div>        
       
        
    </>)
}

// exporting the navbar ;
export default Navbar;