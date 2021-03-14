// This is the main file of the fourth designing project

import React , {useState} from "react";
import "./design4.css"
import img1 from "./images/background7.jpg"
import img2 from "./images/background2.jpg"
import img3 from './images/background3.jpg'
import img4 from "./images/background4.jpg"
import img5 from './images/background5.jpg'
import img6 from "./images/background6.jpg"
import img7 from "./images/myimg.jpg"
import LinkedCameraIcon from '@material-ui/icons/LinkedCamera';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



const Despro4main = () =>{

    const [img , setimg] = useState(img2);
   
    
    const changepic = (event) =>{
        setimg(event.target.src)
       
    }
    return(<>

    

        <div className="design4"  >
            <div className="design4_background">
                <img src={img} alt="sorc"/>
            </div>
            <div className="design4_navbar">
                <div className="design4_nav_col1" style = {{zIndex : 2}}>
                    <LinkedCameraIcon style ={{fontSize: "2.6rem"}}/>
                    <p>RADIENT</p>
                </div>
                <div className="design4_nav_col2">
                    <button className="design4_btn">Explore</button>

                    <img src={img7} alt="img" width = " 55px " height = "55px" style = {{borderRadius : "50%" }}/>
                </div>
            </div>

            <div className="design4_cont1">
               <div className="design4_cont1_content">
                   <h1>DISCOVER</h1>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum nostrum fugit inventore, eaque similique adipisci quisquam, explicabo pariatur, voluptatum ratione soluta error placeat.
                   </p>
                   <input type="search" defaultValue = "Search" />
               </div>
            </div>
            <div className="design4_cont2">
                <ArrowRightAltIcon style = {{transform :"rotateZ(180deg) " , fontSize : "3rem" , color: "white"}}/>
                <div className="design4_cont2_slider">
                    <img src={img1} alt="img"   height = "45px" onClick = {changepic} />
                    <img src={img2} alt="img"   height = "45px" onClick = {changepic} />
                    <img src={img3} alt="img"   height = "45px" onClick = {changepic} />
                    <img src={img4} alt="img"   height = "45px" onClick = {changepic} />
                    <img src={img5} alt="img"   height = "45px" onClick = {changepic} />
                    <img src={img6} alt="img"   height = "45px" onClick = {changepic} />
                
                </div>
                <ArrowRightAltIcon style ={{color : "white" , fontSize : "3rem"}}/>
            </div>

        </div>
    
    </>)
}

// exporting the main file 

export default Despro4main;

