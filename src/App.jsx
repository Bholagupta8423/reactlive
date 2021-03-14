// Here we are going to build our own portfolio website ;

// part 1 ; HEADER AND HOME SECTION 
// part 2 - About section 
// part 3 - Service section 
// part 4 - Portfolio section 
// part 5 - Testimonial section 
// part 6 - Contact section 
// part 7 - Create links to section , live style switcher. light and dark mode ;
// part 8 - Responsive , page loader 


import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Project from "./Project";
import Services from "./Services";
import FullPro1Main from './fullstack/project1/Main';
import Products from "./fullstack/project1/Products";

import Fullstack from "./fullstack/Fullstack"
import Tshirt from './fullstack/project1/Tshirt';
import Login from "./fullstack/project1/Login";
import Javascript from "./javascript/Javascript";


// importing all of the file of javascript project
import Javpro1home from './javascript/project1/Home';
import Javpro2home from "./javascript/project2/Clock";
import Game from "./javascript/project3/Game";
import Game2 from './javascript/project3/Game2';
import Todo from "./javascript/project4/Todo";

// importing all the files of the project of full stack this is the second project ;
import Fullpro2home from './fullstack/project2/Fullpro2home';
import Fullpro2Service from "./fullstack/project2/Service";

import Fullpro2Contact from "./fullstack/project2/Contact";

import Fullpro2About from "./fullstack/project2/About";

// importing all the file of the web designs ;

import Design from "./webdesign/Design";
import Despro1home from "./webdesign/project1/Home";
import Despro2main from "./webdesign/project2/Main";
import Despro3main from "./webdesign/project3/Main";
import Despro4main from "./webdesign/project4/Main";

// import all the files of api project ;
import Api from "./api/Api";
import Apipro1home from "./api/project1/Home";

import Apipro2home from "./api/project2/Home";

import Apipro3home from "./api/project3/Home";



import {Switch , Route} from "react-router-dom";



const App = () =>{
    return(<>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/about" component = {About}/>
            <Route exact path = "/contact" component = {Contact}/>
            <Route exact path = "/services" component = {Services}/>
            <Route exact path = "/project/" component = {Project}/>
           
            <Route exact path = "/project/fullstack" component = {Fullstack}/>
            <Route exact path = '/project/javascript' component = {Javascript}/>
           
            {/* route inside the project directory  */}

            <Route exact path = "/project/fullstack/project1/home" component ={FullPro1Main}/>

            <Route exact path = "/project/fullstack/project1/products" component = {Products} />
            
            <Route exact path = "/project/fullstack/project1/products/tshirt" component = {Tshirt}/>

            <Route exact path = "/project/fullstack/project1/login" component = {Login}/>

            {/* giving route to the javascript project first  */}

            <Route exact path = "/project/javascript/project1/home" component = {Javpro1home}/>

            {/* giving route to the javascript 2nd project */}

            <Route exact path = "/project/javascript/project2/clock" component ={Javpro2home}/>

            {/* giving route to the third project of javascript ; */}

            <Route exact path = "/project/javascript/project3/game" component = {Game} />

            <Route exact path = "/project/javascript/project3/game2" component = {Game2}/>

            
            {/* giving route to the todolist project  */}

            <Route exact path = "/project/javascript/project4/todo" component = {Todo} />

            {/* giving route to the fullstack 2nd project ; */}

            <Route exact path = '/project/fullstack/project2/service' component = {Fullpro2Service} />

            <Route exact path = '/project/fullstack/project2/home' component = {Fullpro2home}/>

            <Route exact path = "/project/fullstack/project2/contact" component = {Fullpro2Contact}/>

            <Route exact path = "/project/fullstack/project2/about" component = {Fullpro2About}/>

            {/* Giving route to the web design of the project ; */}

            <Route exact path = "/project/design" component = {Design} />

            <Route exact path = "/project/webdesign/project1/home" component = {Despro1home} />

            <Route exact path = "/project/webdesign/project2/main" component= {Despro2main} />

            <Route exact path = '/project/webdesign/project3/main' component = {Despro3main} />

            <Route exact path = "/project/webdesign/project4/main" component ={Despro4main} />

            {/* Giving route to all the project of api 's  */}

            <Route exact path = "/project/api" component = {Api} />

            <Route exact path = "/project/api/project1/home" component = {Apipro1home} />

            <Route exact path = "/project/api/project2/home" component = {Apipro2home} />

            <Route exact path = "/project/api/project3/home"  component = {Apipro3home} />
        </Switch>
    </>)
}

// exporting the app file ;
export default App;