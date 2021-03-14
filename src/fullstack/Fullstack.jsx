// This another file which we are going to arrange in our projects ;

import React from "react";
import "./index.css";
import Fullstackcard from "./Fullstackcard";
import Navbar from "../Navbar";
import img1 from "../images/ecommerce.jpg"
import img2 from "../images/weather.jpg"
import img3 from '../images/ecommerce2.jpg'
// importing other project inside this project ;


const Fullstack = () =>{
    return(<>
        <div className="fullstack1_container">
            <div className="fullstack1_small_container">
            <Navbar/>
            <div className="fullstack1_row">
            <Fullstackcard
            link = "/project/fullstack/project1/home"
            img = {img3}
            head = "ecommerce project"
            text = "This is my first dynamic project , It is an ecommerce website project , It contains 3 or 4 pages and any visit all the pages by using the navbar of the website "/>

            <Fullstackcard
            link = "/project/fullstack/project2/home"
            img = {img2}
            head = "normal dynamic project"
            text = "This is a normal dynamic web project , It is project I have simply used jsx  , css and react js to build it"/>
           
            </div>
            
            </div>
        </div>
       
    </>)
}

// exporting the file ;
export default Fullstack;