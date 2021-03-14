// This is the fullstack card part of the project ;

import React from 'react';
import './index.css';
import {NavLink} from 'react-router-dom'


const Apicard = (props) =>{
    return(<>
        <div className="fullstack_card">
            <div className="fullstack_img">
            <img src={props.img} alt="project img"/>
            <h2>{props.head}</h2>
            </div>
            
           <div className="fullstack_text">
               <NavLink exact to={props.link} className="fullstack_btn"> visit</NavLink>

               <details><summary className="fullstack_btn2">details</summary>
               <p className = "details_text">{props.text}</p>
               </details>
           </div>
        </div>
    </>)
}

// exporting the file ;
export default Apicard;