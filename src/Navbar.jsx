// This is the navbar section of my website ;

import React ,{useState} from "react";
import "./index.css";
import Sidemenu from "./Sidemenu";
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {

    const [size , setSize] = useState("sidemenu")
    const slide = () =>{
        if(size === "sidemenu"){
            setSize("sidemenu2")
        }
        else if (size === "sidemenu2"){
            setSize("sidemenu")
        }
    }
    return (<>
        <div className="nav_container">
            <div className="navs">
                <h1 className="title">B</h1>
                <MenuIcon className="menu_logo" onClick={slide} 
                style={{fontSize: "2rem"}}
                     />
            </div>
        </div>


        <Sidemenu 
       slide = {size}/>
    </>)
}

// exporting the navbar 2nd file ;
export default Navbar;