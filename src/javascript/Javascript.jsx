// This another file which we are going to arrange in our projects ;

import React from "react";
import "./index.css";
import Javascriptcard from "./Javascriptcard";
import Navbar from "../Navbar";
import img1 from "../images/clock.jpg"
import img2 from "../images/digitalclock.jpg";
import img3 from "../images/game.jpg";
import img4 from "../images/todolist.jpg"


// importing other project inside this project ;


const Javascript = () =>{
    return(<>
        <div className="fullstack_container">
            <div className="fullstack_small_container">
            <Navbar/>
            <div className="fullstack_row">
            <Javascriptcard
            link = "/project/javascript/project1/home"
            img = {img1}
            details = "This is clock which I have made in react js . this Clocks always shows the accurate time . In this clock I have used each and every concept of React.js "
            head = "Clock"/>
            <Javascriptcard
            link = "/project/javascript/project2/clock"
            img = {img2}
            details = "This is digital Timer clock . In this project I have used normal time method and some of the desings to  make it attractive"
            head = "digital clock"/>
            <Javascriptcard
            link = "/project/javascript/project3/game"
            img = {img3}
            details = "This is a game of rock, paper and scissor . This gaming project is build in react js using the react hooks and other react concepts"
            head = "Rock, Paper, Scissor"/>
            
            </div>
            <div className="fullstack_row">
                <Javascriptcard 
                link = '/project/javascript/project4/todo' 
                img = {img4}
                details = "This is a normal Todo list which have normal styles and its is fully working "
                head = "todo list"/>
            </div>
            
            </div>
        </div>
       
    </>)
}

// exporting the file ;
export default Javascript;