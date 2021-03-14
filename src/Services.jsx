// This is the services part of the website  here we are going to build it ;

import React from "react"
import "./index.css";
import Navbar from './Navbar';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CodeIcon from '@material-ui/icons/Code';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PaletteIcon from '@material-ui/icons/Palette';
import WebIcon from '@material-ui/icons/Web';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';

const Services = () => {
    return (<>
        <div className="service_container">
            <div className="service_small_container">
                <Navbar />
                <div className="service_title">
                    <h4>SERVICES</h4>
                    <h2>WHAT CAN I DO !</h2>
                </div>
                <div className="service_row">
                    <div className="service_card">
                        <PhoneIphoneIcon className="service_icon" />
                        <h3>Responsive Design</h3>
                        <p>I can create responsive design which can be easily visible in any type of devices such as laptop ,mobile  </p>
                    </div>
                    <div className="service_card">
                        <PaletteIcon className="service_icon" />
                        <h3>Web Design</h3>
                        <p>I can create any type of web design including animation in it , by just using html , css and javascript only ! </p>
                    </div>
                    <div className="service_card">
                        <CodeIcon className="service_icon" />
                        <h3>Clean Coding </h3>
                        <p>My code will be so clean that any other developers  canalso use it for other project  and  it really will be understandable </p>
                    </div>
                </div>
                <div className="service_row">
                    <div className="service_card">
                        <WebIcon className="service_icon" />
                        <h3>React Projects</h3>
                        <p>I can also create  amazing React project including the frontend and the backend part of the website !</p>
                    </div>
                    <div className="service_card">
                        <LaptopMacIcon className="service_icon" />
                        <h3>Javascript Coding </h3>
                        <p>I can write programs in javascript and also maintain the technical part of the website very easily !</p>
                    </div>
                    <div className="service_card">
                        <PhoneIphoneIcon className="service_icon" />
                        <h3>API Project </h3>
                        <p>I am able to work on any project where API is included from other website !
                             </p>
                    </div>
                </div>

            </div>
        </div>

    </>)
}

// exporting the services file ;
export default Services;