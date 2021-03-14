// This is the contact card file here we are going to design the card ;

import React from "react" 
import "./index.css";

const Contactform = (props) =>{
    return (<>
        <div className="contact_form">
            <form action=""> 
                <div className="form_col">
                    <input type="text" placeholder ="Name" />
                    <input type="number" placeholder = "Phone Number"/>
                    <input type="text" placeholder = "Subject"/>
                </div>
                <div className="form_col2">
                <textarea name="" id=""  rows="6" placeholder="Message"></textarea>
                <button type= "submit" >Send Message</button>
                </div>

            </form>
        </div>
    </>)
}

// exporting the card file ;
export default Contactform;