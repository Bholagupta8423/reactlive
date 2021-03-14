// This is the contact page of the website ; 

import React, { useState } from 'react';
import "./fullpro2.css";
import Menu from "./Menu";

const Fullpro2Contact = () =>{

    const [biodata, setBiodata] = useState({
        fullName : "",
        phone : "",
        email : "",
        message : "" 
    })
    const formSubmit = (event) =>{
        event.preventDefault();
        alert(`Hello , your name is ${biodata.fullName} and you have a phone number => ${biodata.phone} and your email address is ${biodata.email} and you have an idea of ${biodata.message}`)
    }
    const inputEvent = (event) =>{
        const name = event.target.name;
        const value = event.target.value;

        setBiodata((olddata)=>{
            if(name === "fullName"){
                return {
                    fullName : value,
                    phone : olddata.phone,
                    email : olddata.email,
                    message : olddata.message
                }
            } 
            else if(name === "phone"){
                return {
                    fullName : olddata.fullName,
                    phone : value,
                    email : olddata.email,
                    message : olddata.message
                }
            }
            else if(name === "email"){
                return {
                    fullName : olddata.fullName,
                    phone : olddata.phone,
                    email : value,
                    message : olddata.message
                }
            }
            else if(name === "message"){
                return {
                    fullName : olddata.fullName,
                    phone : olddata.phone,
                    email : olddata.email,
                    message : value
                }
            }
        })

    }


    return(<>
    <Menu/>
    <h1 className = "contacts_heading"> Contact Us </h1>

    <div className="contacts_container">

        <form action="" onSubmit = {formSubmit}>
        <div className="contacts_row">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" name = "fullName" value = {biodata.fullName} onChange={inputEvent}/>

        </div>
        <div className="contacts_row">
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" placeholder="Mobile Number" name ="phone" value = {biodata.phone} onChange={inputEvent}/>

        </div>
        <div className="contacts_row">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder = "name000@example.com" name ="email" value = {biodata.email} onChange = {inputEvent}/>
        </div>
        <div className="contacts_row">
            <label htmlFor="text">Message</label>
            <textarea  id="text" cols="30" rows="4" name = "message" value={biodata.message} onChange={inputEvent}></textarea>
        </div>
        <button className="submit_btn" type= "submit">Submit Form</button>
        </form>
    </div>
    </>)
}

// exporting the contact page ;
export default Fullpro2Contact;
