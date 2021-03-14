// this is the footer part of the webpage . 

import React from "react" ;
import "./fullpro2.css";

const Footer = () =>{
    const year = new Date().getFullYear();
    return (
        <>
           <footer>
                <p>COPYRIGHT © - {year} | BHOLA PRASAD | - All Right Reserved |</p>
                </footer>
        </>
    )
}

// exporting the footer file . 
export default Footer ;
