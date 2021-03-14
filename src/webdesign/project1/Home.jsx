// This is the home page of the first project of the design part ; 

import React from 'react';
import "./design1.css";
import PersonIcon from '@material-ui/icons/Person';

const Despro1home  = () =>{
    return(<>
            <div className="design1">
                <div className="design1_container">
                    <PersonIcon className = "design1_person_icon"  style={{fontSize : "5rem"}}/>
                    <h2>Login Here</h2>
                    <form action="">
                    <div className="design1_login">
                        <label htmlFor="username">Username</label>
                        <input type="text" id = "username" name = "username" placeholder
                        ="Enter Username" />

                        <label htmlFor="password">Password</label>
                        <input type="password" name =  "password" placeholder = "Enter Password"/>

                        <button className="design1_login_btn" type = "submit">
                            Login
                        </button>

                        <div className="design1_account">
                            <h5>Lost your Password</h5>
                            <h5>Don't have an account ? </h5>
                        </div>

                    </div>
                    </form>
                </div>
            </div>
        
    </>)
}

// exporting the design part of the website ; 

export default Despro1home;