// This is todo list file where we are going to create a project of to do list which  will increase our project value ;

// this is the todo list part component;

import React, { useState } from "react";
import "./todo.css";
import Todo1 from "./Todo1";


const Todo = (props) => {

    const [items, setitems] = useState("");
    const [listitems, setlistitems] = useState([])

    const inputEvent = (event) => {
        setitems(event.target.value)
    }

    const data = () => {

        if (items === "") {
            return ""
        }

        setlistitems((olddata) => {
            return [...olddata, items]

        })

        setitems("")
    }

    const deleteitems = (id) => {
        console.log("deleted");
        setlistitems((olditems) => {
            return olditems.filter((arrelem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className="body_container">
            <div className="todo_container">
                <h1 className="todo_heading">ToDo List</h1>
                <div className="todo_small_container items">
                    <input type="text" placeholder="List a Item" onChange={inputEvent} value={items} />
                    <button className="plus_icon" onClick={data}>+</button>

                </div>
                <div className=" main">
                    {listitems.map((preval, index) => {
                        return (
                            <>
                                <Todo1
                                    text={preval}
                                    key={index}
                                    id={index}
                                    onSelect={deleteitems} />


                            </>
                        )
                    })}
                </div>
            </div>
            </div>

        </>
    )
}

// exporting the file.


// exporting the file.

export default Todo;