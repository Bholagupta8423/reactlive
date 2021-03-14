// This is the second project of  api series // here we are going to create an weather api project ; 

import React , {useState} from "react";
import "./apipro2.css";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import d01 from "./images/01d@2x.png"
import d02 from "./images/02d@2x.png"
import d03 from "./images/03d@2x.png"
import d04 from "./images/04d@2x.png"
import d09 from "./images/09d@2x.png"
import d10 from "./images/10d@2x.png"
import d11 from "./images/11d@2x.png"
import d13 from "./images/13d@2x.png"
import d50 from "./images/50d@2x.png"
import n01 from "./images/01n@2x.png"
import n02 from "./images/02n@2x.png"
import n03 from "./images/03n@2x.png"
import n04 from "./images/04n@2x.png"
import n09 from "./images/09n@2x.png"
import n10 from "./images/10n@2x.png"
import n11 from "./images/11n@2x.png"
import n13 from "./images/13n@2x.png"
import n50 from "./images/50n@2x.png"

const Apipro2home = () =>{

    
   
    const [values , setvalues] = useState("")
    const [temp , setTemp] = useState({
        city : "New York",
        country : "USA",
        icon : n13,
        original : "23",
        min : "20" ,
        max : "25",
        weather : "Clear Sky"



    })
    const fetchdata = () =>{
        fetch( `http://api.openweathermap.org/data/2.5/weather?q=${values}&appid=7d4a06b1ea8dea319c272749d12dfec7`).then((res) => res.json()).then((data) =>{
            console.log(data)
           const ortemp = Math.round(data.main.temp -  273.15) ;
           const mintemp = Math.round(data.main.temp_min - 273.15) ;
           const maxtemp = Math.round(data.main.temp_max - 273.15) ;
           
           var originalicon = "";
           const weathericon = data.weather[0].icon;

           if (weathericon === "01d"){
                originalicon = d01;
           }
           else if (weathericon === "02d"){
               originalicon = d02
           }
           else if (weathericon === "03d"){
               originalicon = d03
           }
           else if (weathericon === "04d"){
               originalicon = d04
           }
           else if (weathericon === "09d"){
               originalicon = d09
           }
           else if (weathericon === "10d"){
               originalicon = d10
           }
           else if (weathericon === "11d"){
               originalicon = d11
           }
           else if (weathericon === "13d"){
               originalicon = d13
           }
           else if (weathericon === "50d"){
               originalicon = d50
           }
           
           else if (weathericon === "01n"){
                originalicon = n01;
           }
           else if (weathericon === "02n"){
               originalicon = n02
           }
           else if (weathericon === "03n"){
               originalicon = n03
           }
           else if (weathericon === "04n"){
               originalicon = n04
           }
           else if (weathericon === "09n"){
               originalicon = n09
           }
           else if (weathericon === "10n"){
               originalicon = n10
           }
           else if (weathericon === "11n"){
               originalicon = n11
           }
           else if (weathericon === "13n"){
               originalicon = n13
           }
           else if (weathericon === "50n"){
               originalicon = n50
           }
           
           
           setTemp((oldata) =>{
               return{
                   city : data.name,
                   country : data.sys.country,
                   icon : originalicon,
                   original : ortemp,
                   min : mintemp,
                   max : maxtemp,
                   weather : data.weather[0].description
               }
           })
        })
    
    }
    const inputEvent = (event) =>{
        setvalues(event.target.value)
    }
    return(<>
        <div className="api2">
            <div className="api2_head_container">
                <input type="text" placeholder = "Enter City" value ={values}  onChange ={inputEvent}/>
                
                <button className = "api2_btn"  onClick = {fetchdata}>Get Weather</button>
            </div>
            <div className="api2_result_container">
                <div className="api2_result_location">
                    <h1>{temp.city} ,</h1>
                    <h1>{temp.country}</h1>
                </div>
                <div className="api2_result_icon">
                        <img src={temp.icon} alt="icon" style = {{fontSize: "4rem"}} />
                </div>
                <div className="api2_result_temp">
                    <h2>{temp.original}° C</h2>
                    <div className="api2_result_minmax">
                        <h4>{temp.min}° C<br/> <span>Min-temp</span></h4>
                        <h4>{temp.max}° C<br/> <span>Max-temp</span></h4>
                    </div>
                </div>

                <div className="api2_result_sky">
                    <p>{temp.weather}</p>
                </div>

            </div>
        </div>
    </>)
}

// exporting the second project file here ;
export default Apipro2home;
