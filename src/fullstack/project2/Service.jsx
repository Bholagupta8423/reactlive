// This is the services page of the website 

import React from "react";
import "./fullpro2.css";
import Card from "./Card";
import Sdata from "./Sdata";
import Footer from "./Footer";
import Menu from "./Menu"

const Fullpro2Service = () =>{
    return(<>
    <Menu/>
    <h1 className="service_heading ">Our Services</h1>
       <div className="card_container">
       {Sdata.map((data, index) =>{
         return  <Card 
           title = {data.title}
           imgsrc = {data.imgsrc}/>
       })}
       
           </div> 

          <Footer/>
    </>)
}

// exporting the file ; 
export default Fullpro2Service ;