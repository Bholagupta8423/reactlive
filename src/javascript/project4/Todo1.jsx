// this is the todo list part component;

import React from "react";
import "./todo.css"

const Todo1 = (props) => {



    return (
        <>
            <div className="result">

                
                <button 
                className="cross_icon" 
                onClick = { () =>{
                    props.onSelect(props.id)
                }}
                 > ✖️</button>
                <li className="text">{props.text}</li>
                
            </div>
        </>
    )
}

// exporting the file.

export default Todo1;