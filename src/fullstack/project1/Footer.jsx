// This is the footer part of the website ; here we are going to create the footer section ;

import React from "react";
import "./project1.css";
import img29 from "./fullpro1img/play-store.png";
import img30 from "./fullpro1img/app-store.png";
import img31 from "./fullpro1img/logo-white.png";

const Footer = () =>{
    return(<>
       <div className="footerx">
                <div className="footerx_container">
                    
                    <div className="footerx_col1">
                        <h3>Download our App</h3>
                        <p>Download App for Android and ios mobile phone.</p>
                        <div className="footerx_img">
                            <div className="footerx_img1">
                                <img src={img29} alt="logo" />
                            </div>
                            <div className="footerx_img2">
                                <img src={img30} alt="logo" />
                            </div>

</div>
                    </div>
                    <div className="footerx_col2">
                        <img src={img31} alt="logo" />
                        <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.</p>
                    </div>
                   
                  
                    <div className="footerx_col3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footerx_col4">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>YouTube</li>
                        </ul>
                    </div>
                </div>
              
                <hr/>
                <div className="copyright">
                <p>|    copyright 2021 - Bhola Prasad   |</p>  
                </div>
                </div>
            
    </>)
}

// exporting the footer part 
export default Footer;