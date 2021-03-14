// Here we are going to desing the service card for further use only; 

import React from "react" ;
import "./index.css";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CodeIcon from '@material-ui/icons/Code';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PaletteIcon from '@material-ui/icons/Palette';
import WebIcon from '@material-ui/icons/Web';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';

const Servicecard = () =>{
    return (<>
        <div className="service_card">
            <PhoneIphoneIcon className ="service_icon"/>
            <h3>Responsive Design</h3>
            <p>I can create responsive design which can be easily visible in any type of devices such as laptop ,mobile and tab </p>
        </div>
    </>)
}

// exporting the servicecard file ;
export default Servicecard ;