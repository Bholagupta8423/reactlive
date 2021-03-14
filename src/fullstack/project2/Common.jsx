// in this file we are going to create a common page which will be helpful for our about and home page of this website ; 

// This is  the about page of the website ; 

import React from "react";
import "./fullpro2.css";
import Menu from "./Menu"
import {NavLink} from "react-router-dom";


const Common = (props) =>{
    return (<>
    
    
            
            <div className="homes_containers">
            
                <div className="homes_row">
                    <div className="homes_col1 homes_text">
                              <h1>{props.text} <br/>  <strong style={{color: "blue"}}>React Developers</strong></h1>
                        <p>We are the team of talented developers making websites !</p>
                       <NavLink to={props.visit} exact> <button className="btn">{props.btntext}</button></NavLink>
                    </div>
                    <div className="homes_col2">
                       <img className="homes_img" src={props.img}alt=" site.png"/>
                    </div>
                </div>
            </div>
            
    </>)
}

// exporting the home page ;
export default  Common ;