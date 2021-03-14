// This is the login page which we are going to desing here it will be very helpful to us ;

import React, { useState } from "react";
import "./project1.css";
import Navbar from './Navbar';
import Footer from "./Footer";
import img from './fullpro1img/image1.png';

const Login = () => {

    const [borderx, setBorderx] = useState("none")
    const [bordery, setBordery] = useState("none")
    const [trans , setTrans] = useState("none")

    
    const loginx = () => {
        setBorderx("3px solid red")
        setBordery("none")
        setTrans("translateX(0px)")
        
    }
    const registerx = () => {
        setBorderx("none")
        setBordery("3px solid red")
        setTrans("translateX(-280px")
       
    }
    let loginid = {
        borderBottom: borderx,

    }
    let registerid = {
        borderBottom: bordery,

    }
    let form = {
        transform : trans
    }

    return (<>
        <div className="loginx_container">
            <Navbar />
        </div>
        <div className="loginx_account">
            <div className="accountx_container">
                <div className="accountx_img">
                    <img src={img} alt="image" />
                </div>
                <div className="accountx_form">
                    <div className="formx_heading">
                        <h3 onClick={loginx} style={loginid}>Login</h3>
                        <h3 onClick={registerx} style={registerid}>Register</h3>
                    </div>
                    <div className="formx_main">
                        <div className="formx" style ={form}>

                            <div className="accountx_login">
                                <input type="text" placeholder="Username" 
                               />
                                <input type="password" placeholder="Password" 
                                />
                                <button className="registerx_btn">Login</button>
                                <p>Forgot Password</p>
                            </div>
                            <div className="accountx_register">
                                <input type="text" placeholder="Username" />
                                <input type="email" placeholder="E-mail" />
                                <input type="password" placeholder="Password" />
                                <button className="registerx_btn">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}

// exporting the login file;
export default Login;