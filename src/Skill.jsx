// This is the skill section which we are going to design in our portfolio website ;

import React, { useState } from "react";
import "./index.css"
import Skilldesign from "./Skilldesign";
import Education from "./Education";

const Skill = () => {

    const [knowledge , setKnowledge] = useState("knowledge_inbox")
    const skills = () =>{
        setKnowledge("knowledge_inbox")
    }
    const education = () =>{
        setKnowledge("knowledge_inbox2")
    }
    return (<>
        <div className="skill_container">
            <div className="skill_title">
                <button  className="skill_title_btn" onClick={skills}>Skills</button>
                
                <button  className="skill_title_btn"
                onClick={education}>Education</button>
            </div>
            <div className="knowledge">
                <div className={knowledge}>
                <Skilldesign/>
                <Education/>
                </div>
            
            </div>

        </div>
    </>)
}

// exporting the skill file ;
export default Skill;