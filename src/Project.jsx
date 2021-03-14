// This is my project part where i am going to include my all project ;

import React from "react";
import "./index.css";
import Projectcard from "./Projectcard";
import Navbar from "./Navbar";
import design1 from "./images/design1.jpg"
import design2 from "./images/design2.jpg"
import design3 from "./images/design3.jpg"
import design4 from "./images/design4.jpg"
import design5 from "./images/design5.jpg"
import javascript1 from "./images/javascript1.jpg";
import javascript2 from "./images/javascript2.jpg";
import javascript3 from "./images/javascript3.jpg";
import javascript4 from "./images/javascript4.jpg";
import javascript5 from "./images/javascript5.jpg";
import api1 from "./images/api1.jpg";
import api2 from "./images/api2.jpg";
import api3 from "./images/api3.jpg";
import api4 from "./images/api4.jpg";
import api5 from "./images/api5.jpg";
import web1 from "./images/web1.jpg";
import web2 from "./images/web2.jpg";
import web3 from "./images/web3.jpg";
import web4 from "./images/web4.jpg";
import web5 from "./images/web5.jpg";


const Project = () => {
    return (<>
        <div className="project_container">
            <div className="project_small_container">
                <Navbar />
                <div className="project_card_design">    
                   <Projectcard 
                    title = "Designing Projects"
                    text = "Web Designs"
                    img1 = {design1} 
                    img2 = {design2}
                    img3 = {design3} 
                    img4 = {design4} 
                    img5 = {design5}
                    link = "/project/design" />

                    <Projectcard 
                    title = "Javascript projects"
                    text = "Programming "
                    img1 = {javascript1} 
                    img2 = {javascript2}
                    img3 = {javascript3} 
                    img4 = {javascript4} 
                    img5 = {javascript5} 
                    link = "/project/javascript" 
                     />          
                       </div>

                <div className="project_card_design">    
                   <Projectcard 
                    title = "API Projects"
                    text = "fetching data"
                    img1 = {api1} 
                    img2 = {api2}
                    img3 = {api3} 
                    img4 = {api4} 
                    img5 = {api5}
                    link = "/project/api" />

                    <Projectcard 
                    title = "Full Stack projects"
                    text = " Full Stack "
                    img1 = {web1} 
                    img2 = {web2}
                    img3 = {web3} 
                    img4 = {web4} 
                    img5 = {web5} 
                    link = "/project/fullstack" 
                     />          
                       </div>


            </div>
        </div>
    </>)
}

// exporting the file ;
export default Project;