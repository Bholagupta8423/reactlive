 
// This is the contact section of my website which I am going to desing ;

import React from "react";
import "./index.css";
import Contactform from "./Contactform";
import Navbar from "./Navbar";
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const Contact = () => {
    return (<>
        <div className="contact_container">
            <div className="contact_small_container">
                <Navbar className="contactnav" />
                <div className="contact_title">
                    <h4>CONTACT</h4>
                    <h2>GET IN TOUCH</h2>
                </div>
                <div className="contact_details">
                    <div className="contact_card">
                        <CallIcon className="contact_icon" />
                        <h4>Phone</h4>
                        <p>8423454879</p>
                    </div>
                    <div className="contact_card">
                        <EmailIcon className="contact_icon" />
                        <h4>E-mail</h4>
                        <p>bg902690@gmail.com</p>

                    </div>
                    <div className="contact_card">
                        <LocationOnIcon className="contact_icon" />
                        <h4>Address</h4>
                        <p>Kushinagar , (U.P)</p>

                    </div>
                </div>
                {/* form section */}
                <Contactform/>
            </div>
        </div>

    </>)
}

// exporting the contact file ;
export default Contact;