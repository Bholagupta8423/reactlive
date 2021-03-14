// This  is the home page of the websit e;

import React from "react";
import "./fullpro2.css";
import Common from "./Common";
import img1 from "./pro2images/home.png";
import Footer from "./Footer";
import Menu from "./Menu";

const Fullpro2home = () =>{
    return (<>
    
            <Menu/>
            <Common
            img = {img1}
            text = "Grow Your Business with" 
            btntext = "Get Started"
            visit = "/project/fullstack/project2/service"/>
            <Footer/>
            
    </>)
}

// exporting the home page ;
export default  Fullpro2home ;