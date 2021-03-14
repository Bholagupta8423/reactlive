// This is the education part of the website which we are going to design ;


import React from "react";
import "./index.css";
import Educationcard from "./Educationcard";


const Education = () =>{
    return(<>
        <div className="education_container">
            <div className="education_col">
               <Educationcard
               year = "2014-2015"
               class = "High School (10th)"
               text  = "I cleared my High School from P.D Academy , Deoria by Scoring (9.6 CGPA) , It was very high achievement for me !" /> 

               <Educationcard
               year = "2016-2017"
               class = "Intermediate (12th)"
               text = "I cleared my intermediate from (Maharana Pratap Inter College) with 76% in Physics , Chemistry and Mathematics ! "/> 
            </div>
            <div className="education_col">
               <Educationcard
               year = "2017- 2020"
               class = "Bachelor of Arts (B.A)"
               text = "After 12 th  , I started preparing for Government jobs and also passed out my graduation with 62% marks in History ,Hindi and English ! "/> 
               <Educationcard
               year = "Sept 2020 - Till Now "
               class = "Web Development"
               text = "After Graduation , I started coding to become a Full Stack Developer . I have more than  6 months Coding Experience !" /> 
               
            </div>
        </div>
    </>)
}

// exporting the education part ;
export default Education;
