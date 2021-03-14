// This is the error page of the website ; 

import React from "react";
import "./fullpro2.css";
import Errorimg from "./pro2images/error.png";
import { useHistory} from "react-router-dom";
import Footer from "./Footer"

const Error = () =>{

    const history = useHistory()
    return (<>
    <h1 style={{textAlign : "center", margin : "44px "}}>Oops ! <span style={{color : "red"}}>404 Error</span> page not found</h1>
    <div className="error_img">
    <img src={Errorimg} alt="error" className="error" />
    </div>
    
    <button className = "error_btn" onClick={history.goBack}>Go Back</button>
    <Footer/>
    </>)
   
}

// exporting the error file ;
export default Error ;