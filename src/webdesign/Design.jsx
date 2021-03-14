// This another file which we are going to arrange in our projects ;

import React from "react";
import "./index.css";
import Designcard from "./Designcard";
import Navbar from "../Navbar";
import img1 from "../images/imageviewer.jpg"
import img2 from "../images/normal.jpg"
import img3 from '../images/slider.jpg'
import img4 from "../images/login.jpg"


// importing other project inside this project ;


const Design = () =>{
    return(<>
        <div className="fullstack_container">
            <div className="fullstack_small_container">
            <Navbar/>
            <div className="fullstack_row">
            <Designcard
            link = "/project/webdesign/project1/home"
            img = {img4}
            head = "Login form"
            text = "This is a simple login form design . This design is made by using css and jsx element , It is not fully functional , It is made just for designing purpose"/>
            <Designcard
            link = "/project/webdesign/project2/main"
            img = {img2}
            head = "homepage layout"
            text = "This is a home page layout In this home I have used some hover effects on the navmenu and it looks very pretty !"/>
            <Designcard
            link = "/project/webdesign/project3/main"
            img = {img3}
            head = "navbar slider"
            text = "This is navbar slider whenever you hover on the navbar menu then an other menu option will be shown in the down side  . Which feels like an advenced navbar "/>
            
            </div>
            <div className="fullstack_row">
                <Designcard 
                link = '/project/webdesign/project4/main' 
                img = {img1}
                head = "image changer"
                text = "This is the homepage layout desing which makes the homepage modern whenever you click on the small images the whole background images changes to that small images "/>
            </div>
            
            </div>
        </div>
       
    </>)
}

// exporting the file ;
export default Design;