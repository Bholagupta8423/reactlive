// This is the designing part of the skill; 


import React from "react"
import "./index.css";

const Skilldesign = () => {
    return (<>
        <div className="skill_design  ">
            <div className="skill_col">
                <h2>FRONTEND</h2>
                <div className="skill_html skill_tech">
                    <h3>Html <span>60%</span></h3>
                    <div className="html"></div>
                </div>
                <div className="skill_css skill_tech">
                    <h3>CSS <span>70%</span></h3>
                    <div className="css"></div>
                </div>
                <div className="skill_javascript skill_tech">
                    <h3>Javascript <span>75%</span></h3>
                    <div className="javascript"></div>
                </div>
                
                <div className="skill_react skill_tech">
                    <h3>React Js <span>80%</span></h3>
                    <div className="react"></div>
                </div>
            </div>
            <div className="skill_col">
                <h2>BACKEND</h2>
                <div className="skill_node skill_tech">
                    <h3>Node JS <span>50%</span></h3>
                    <div className="node"></div>
                </div>
                <div className="skill_express skill_tech">
                    <h3>Express  <span>45%</span></h3>
                    <div className="express"></div>
                </div>
                <div className="skill_mongo skill_tech">
                    <h3>Mongo DB <span>55%</span></h3>
                    <div className="mongo"></div>
                </div>
                <div className="skill_mongoose skill_tech">
                    <h3>Mongoose <span>40%</span></h3>
                    <div className="mongoose"></div>
                </div>
               
            </div>
        </div>

    </>)
}

// exporting the skill design part  of the website ;

export default Skilldesign;