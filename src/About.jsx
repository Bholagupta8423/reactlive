// This is about page which i am going to design ;

import React, {useState} from "react";

import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import "./index.css";
import img1 from "./images/img.jpg"
import Sidemenu from "./Sidemenu";
import Skill from "./Skill";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const About = () =>{

    

    return (<>
        <div className="about_container">
            <div className="about_small_container">
            <Navbar/>
                <div className="about_heading">
                    <h4>MAIN INFO</h4>
                    <h2>ABOUT ME</h2>
                </div>
                <div className="about_info">
                    <div className="about_col">
                        <img src={img1} alt="myimage"/>
                        <div className="social_link">
                            <NavLink  exact to = "#" className = "social_logo"><FacebookIcon/></NavLink>
                            <NavLink exact to = "#" className = "social_logo">
                            <TwitterIcon/></NavLink>
                            <NavLink exact to = "#" className = "social_logo">
                            <InstagramIcon/></NavLink>
                            <NavLink exact to = "#" className = "social_logo">
                            <LinkedInIcon/></NavLink>
                        </div>
                    </div>
                    <div className="about_col_text">
                        <p>Hii ! My name is Bhola Prasad , I completed  my graduation in Arts and Started Coding on 10 Sept , 2020 . Now after Completing my Web development course I am able to build any type of websites by using the latest Technology . 
                            I have learnt all this advanced technology through youtube . But I can create Amazing web Designs , Web  Animation and also developed Full websites including the Frontend and the Backend Part .
                             Now , Coding has become my passion . 
                        </p>
                        <p>
                            My main goal is to become a developer who can create Both Websites and  Android app and now I am learning React Native the latest technology for Android development;
                        </p>
                        <div className="about_btn">
                            <NavLink exact to = "/" className = "btns">Download CV</NavLink>
                            <NavLink exact to = "/contact" className = "btns">Hire Me</NavLink>
                        </div>
                    </div>
                </div>
                <Skill/>
            </div>
        </div>
    </>)
}

// exporting the about file ;
export default About;