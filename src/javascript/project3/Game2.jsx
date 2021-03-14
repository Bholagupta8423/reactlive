// This is the second part of the game project which is rock paper and scissor ;

import React, { createContext, useState } from "react";
import './project.css';
import rock from "./images/rock.png";
import paper from "./images/paper.png";
import scissor from './images/scissor.png';

import {NavLink} from "react-router-dom";




const Game2 = () =>{
    const [css , setcss] = useState({
        firstcss : "flex",
        secondcss : "none" 
    })

    const [img , setimg] = useState({
        firstimg : "",
        secondimg : ""
    })

    const [result , setresult] = useState("hello")

// here we are going to define the the computer choice;

 
    
    const inputevent = (event) =>{
        const name = event.target.name;

        setcss((preval) =>{
            return {
                firstcss : "none",
                secondcss : "flex"
            }
        })
         const number = Math.floor(Math.random()*3)
         const comp = ['rock', 'paper', 'scissor']
         const compchoice = comp[number];

         console.log(name)
         console.log(compchoice)
         
        
        if (name === 'rock'){
            if (compchoice === 'rock'){
                 setresult('Match Draw')
                 setimg((olddata) =>{
                     return {
                         firstimg : rock,
                         secondimg : rock
                     }
                 })
            }
            else if (compchoice === 'paper'){
                 setresult("You Lose !")
                 setimg((olddata) =>{
                    return {
                        firstimg : rock,
                        secondimg : paper
                    }
                })
            }
            else if (compchoice === 'scissor'){
                 setresult("You Win !")
                 setimg((olddata) =>{
                    return {
                        firstimg : rock,
                        secondimg : scissor
                    }
                })
            }
        }

        else if (name === 'paper'){
            if(compchoice === 'paper'){
                 setresult("Match Draw !")
                 setimg((olddata) =>{
                    return {
                        firstimg : paper,
                        secondimg : paper
                    }
                })
            }
            else if (compchoice === 'rock'){
                 setresult("You Win !")
                 setimg((olddata) =>{
                    return {
                        firstimg : paper,
                        secondimg : rock
                    }
                })
            }
            else if (compchoice === 'scissor'){
                 setresult("You Lose !")
                 setimg((olddata) =>{
                    return {
                        firstimg : paper,
                        secondimg : scissor
                    }
                })
            }
        }
        else if (name === 'scissor'){
            if (compchoice === 'scissor'){
                 setresult('Match Draw')
                 setimg((olddata) =>{
                    return {
                        firstimg : scissor,
                        secondimg : scissor
                    }
                })
            }
            else if (compchoice === 'rock'){
                setresult("You Lose !")
                setimg((olddata) =>{
                    return {
                        firstimg : scissor,
                        secondimg : rock
                    }
                })
            }
            else if (compchoice === 'paper'){
                 setresult("You Win !")
                 setimg((olddata) =>{
                    return {
                        firstimg : scissor,
                        secondimg : paper
                    }
                })
            }
        }
        

        

        
        
    }
    const fircont = {
        display : css.firstcss
    }
    const seccont = {
        display : css.secondcss
    }
    return(<>
    <div className="game_container">
        <div className="game2_small_container" style={fircont}>
            <h1>Game Challenge : Rock , Paper and Scissor </h1>
            <h3>Computer has choosen and now it's your chance to choose</h3>
            <div className="game2_img">
                <div className="game_col1">
                    <img src={rock} alt="" name = "rock" onClick = {inputevent} />
                    
                </div> 
                <div className="game_col2">
                    <img src={paper} alt="" name = "paper" onClick = {inputevent} />
                    
                </div>
                <div className="game_col3">
                    <img src={scissor} alt="" name = "scissor" onClick = {inputevent} />
                    
                </div>
            </div>
        </div>

        {/* second part started here  */}

        <div className="game2_small_container" style = {seccont}>
            <h1>Game Challenge : Rock , Paper and Scissor </h1>
           
            <div className="game2_img">
                <div className="col1">
                    <h4>Your Choice</h4>
                    <img src={img.firstimg} alt="img" />
                    
                </div> 
                <div className="col2">
                    <h3>{result}</h3>
                  
                   
                </div>
                <div className="col3">
                    <h4>Computer Choice</h4>
                    <img src={img.secondimg} alt="img" />
                </div>
            </div>
            <NavLink exact to = "/project/javascript/project3/game"><button className = "game_btn">Restart</button></NavLink>
        </div>
    </div>
    </>)
}

//exporting the game second file ;
export default Game2;
