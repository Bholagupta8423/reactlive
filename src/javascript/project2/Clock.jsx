import React, { useState } from 'react';
import "./clock.css";

const Javpro2home = () =>{

    // getting the time part

    const [time , setTime] = useState({
        hour : "",
        min : "",
        sec : ""
    })
    const clock = () =>{
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();

        

        setTime((preval) =>{
            return{
                hour : hh,
                min : mm,
                sec : ss
            }
        })

    }
    setInterval(clock ,1000)
    return(<>
        <div className="clock_container">
            <div className="clock_small_container">
                <h1>THE TIME IS NOW </h1>
                <div className="time">
                    <div className="times">
                    <div className="time_hr">
                        <h1>{time.hour}</h1>
                        <p>HOURS</p>
                    </div>
                    </div>
                    <div className="times">
                    <div className="time_mn">
                        <h1>{time.min}</h1>
                        <p>MINUTES</p>
                    </div>
                    </div>
                    <div className="times">
                    <div className="time_sc">
                        <h1>{time.sec}</h1>
                        <p>SECONDS</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

// exporting the file ;
export default Javpro2home;