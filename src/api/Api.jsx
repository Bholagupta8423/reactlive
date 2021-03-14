// This another file which we are going to arrange in our projects ;

import React from "react";
import "./index.css";
import Apicard from "./Apicard";
import Navbar from "../Navbar";
import img1 from "../images/imagesearcher.jpg";
import img2 from '../images/weather2.jpg';
import img3 from "../images/corona.jpg";


// importing other project inside this project ;


const Api = () =>{
    return(<>
        <div className="api_container">
            <div className="api_small_container">
            <Navbar/>
            <div className="api_row">
            <Apicard
            link = "/project/api/project1/home"
            img = {img1}
            head = "image searcher"
            text = "In this project , I have used Source.Unsplash.com api from free photos to render on my page which is free api , And In this project you can type of photos worldwide"/>
            <Apicard
            link = "/project/api/project2/home"
            img = {img2}
            head = "weather app"
            text = "In this project, I have used Weather api , here you can easily search weather condition of any city of the world and you will get perfect result "/>
            <Apicard
            link = "/project/api/project3/home"
            img = {img3}
            head = "covid-19 tracker"
            text = "In this project , I have used disease.sh.com free api , This is the best project which I have ever made In this project you can the actuall covid data of any country easily also you will get graph visualization for better understanding "/>
            
            </div>
               
            
            </div>
        </div>
       
    </>)
}

// exporting the file ;
export default Api;