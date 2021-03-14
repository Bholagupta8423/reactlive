// This is the home page of the website here the background image slider will be used;

import React, { useState } from "react";
import img1 from "./images/pic1.jpg"
import img2 from "./images/pic2.jpg"
import img3 from "./images/pic3.jpg"
import img4 from "./images/pic4.jpg"
import img5 from "./images/pic5.jpg"
import { NavLink } from "react-router-dom"
import Navbar from "./Navbar";

import "./index.css"

const Home = () => {


    return (<>
        <div className="container">
            <div className="home_container">
                <div className="home_img">
                    <img src={img1} alt="background img" />
                    <img src={img2} alt="background img" />
                    <img src={img3} alt="background img" />
                    <img src={img4} alt="background img" />
                    <img src={img5} alt="background img" />
                </div>
                <div className="home_nav">
                    <Navbar />
                </div>


                <div className="home_col">

                    <h4>Hello,</h4>
                    <h1> | My Name is <span>Bhola Prasad </span> |</h1>
                    <p>I'm a Web Designer and Developer</p>
                    <NavLink exact to="/about" className="home_btn">About Me</NavLink>
                </div>
            </div>
        </div>
    </>)
}

// exporting the home file ;
export default Home;