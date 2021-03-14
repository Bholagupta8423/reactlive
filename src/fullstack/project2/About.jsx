// This is  the about page of the website ; 

import React from "react";
import "./fullpro2.css";
import Common from "./Common";
import img1 from "./pro2images/about.png";
import Footer from "./Footer";
import Menu from "./Menu";

const Fullpro2About = () =>{
    return(<>
    <Menu/>
    <Common
    text = "Welcome to  About Page of "
    img = {img1}
    btntext = "Contact Us" 
    visit = "/project/fullstack/project2/contact" />
    <Footer/>
    </>)
}

// exporting the home page ;
export default  Fullpro2About ;