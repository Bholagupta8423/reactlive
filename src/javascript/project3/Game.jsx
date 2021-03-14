// this is the third project of the javascript here we are going to build a game  which is known as rock paper scissor for our project ;

import React from "react";
import "./project.css";
import {NavLink} from "react-router-dom"


const Game = () =>{
    return(<>
        <div className="game_container">
            <div className="game_small_container">
            <h1>Game Challenge : Rock , Paper and  Scissor  </h1>
            
            <NavLink exact to = "/project/javascript/project3/game2" className="game_btn">Play Game</NavLink>
            </div>
        </div>

    </>)
}
// exporting the file to main app;
export default Game;  