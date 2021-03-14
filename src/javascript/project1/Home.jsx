import React, { useState } from 'react';
import img from './images/clock.png'
import "./hello.css"




const Javpro1home = () => {

    // getting the actual time 
    const [time , setTime] = useState({
        hours : "",
        minu : "", 
        seco : ""
    })

    const clock = () =>{
     let date = new Date();
     let mm = date.getMinutes() * 6;
     let ss = date.getSeconds() *6;
     let hh = date.getHours() *30 + date.getMinutes()/2 ;
     
     
    
     
    
        setTime((preval) =>{
            return {
                hours : hh,
                minu : mm,
                seco : ss
            }
        })
    

    

}


let hr = {
    transform : `rotateZ(${time.hours}deg)`
}
 let mn = {
    transform : `rotateZ(${time.minu}deg)`
}
let sc = {
    transform : `rotateZ(${time.seco}deg)`
}    

setInterval(clock , 1000);


    return (<>
        <div className="container">
            <div className="small_container">
                <img src={img} alt="clock.png" />

                <div className="hour" >
                    <div className="hr" style={hr}></div>
                </div>
                <div className="min" >
                    <div className="mn" style={mn} ></div>
                </div>
                <div className="sec">
                    <div className="sc" style={sc}  ></div>
                </div>
                <div className="circle"></div>
            </div>
        </div>
    </>)

}

// exporting the home file ;
export default Javpro1home;