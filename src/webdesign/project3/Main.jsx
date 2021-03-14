// This is the third project of the web design ;

import React from 'react';
 import "./design3.css";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';


import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';

const Despro3main = () => {
    return (<>
        <div className="design3">
            <div className="design3_container">
                
                <ul>
                    <li className ="design3_active"><HomeIcon  className = "design3_icon" /> <h3>Home
                    <div className="sub_menu1">
                            <ul>
                                <li>Home</li>
                                <li>about</li>
                                <li>contact</li>
                            </ul>
                        </div>
                        </h3>
                        </li>
                        
                    <li><PersonIcon  className = "design3_icon" /> <h3>About Us
                        <div className="sub_menu1">
                            <ul>
                                <li>Mission</li>
                                <li>Vision</li>
                                <li>Team</li>
                            </ul>
                        </div>
                        </h3></li>
                    <li><SettingsApplicationsIcon  className = "design3_icon" /> <h3>Services
                        <div className="sub_menu1">
                            <ul>
                                <li>Web Designing</li>
                                <li>Marketing
                                    <div className="sub_menu2">
                                        <ul>
                                            <li>SEO</li>
                                            <li>Social Media</li>
                                            <li>Email Marketing</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>Mobile App
                                    <div className="sub_menu2">
                                        <ul>
                                            <li>Android App</li>
                                            <li>ios App</li>
                                            <li>Ionic App</li>
                                            <li>Flutter App</li>
                                            <li>Unity App</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </h3></li>
                    <li><GroupAddIcon  className = "design3_icon" /> <h3>Clients</h3></li>
                    <li><SupervisedUserCircleIcon  className = "design3_icon" /> <h3>Investors</h3></li>
                    <li><CenterFocusStrongIcon  className = "design3_icon" /> <h3>Training
                        <div className="sub_menu1">
                            <ul>
                                <li>Testing</li>
                                <li>Development
                                    <div className="sub_menu2">
                                        <ul>
                                            <li>Java</li>
                                            <li>Angular</li>
                                            <li>PHP</li>
                                            <li>Python</li>
                                            <li>JSP</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>UI Designing</li>
                            </ul>
                        </div>
                        </h3></li>
                    <li><MonetizationOnIcon  className = "design3_icon" /> <h3>Pricing</h3></li>
                    <li><ContactPhoneIcon  className = "design3_icon" /> <h3>Contact
                        
                        <div className="sub_menu1">
                            <ul>
                                <li>Whatsapp</li>
                                <li>Twitter</li>
                                <li>E-mail</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        </h3></li>
                
                </ul>

            </div>
        </div>
    </>)
}

// exporting the file ; 
export default Despro3main;