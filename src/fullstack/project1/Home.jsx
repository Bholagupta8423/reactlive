// This is the Home part of the project ;

import React, { useState } from "react";
import "./project1.css";

import Navbar from './Navbar';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

import img4 from "./fullpro1img/image1.png"
import { NavLink } from "react-router-dom";

import img5 from "./fullpro1img/category-1.jpg"
import img6 from "./fullpro1img/category-2.jpg"
import img7 from "./fullpro1img/category-3.jpg"

import Featurecard from './Featurecard';

import img8 from "./fullpro1img/product-1.jpg";
import img9 from "./fullpro1img/product-2.jpg";
import img10 from "./fullpro1img/product-3.jpg";
import img11 from "./fullpro1img/product-4.jpg";
import img12 from "./fullpro1img/product-5.jpg";
import img13 from "./fullpro1img/product-6.jpg";
import img14 from "./fullpro1img/product-7.jpg";
import img15 from "./fullpro1img/product-8.jpg";
import img16 from "./fullpro1img/product-9.jpg";
import img17 from "./fullpro1img/product-10.jpg";
import img18 from "./fullpro1img/product-11.jpg";
import img19 from "./fullpro1img/product-12.jpg";

import img20 from "./fullpro1img/exclusive.png";


import Testimonial from "./Testimonail";

import img21 from './fullpro1img/user-1.png';
import img22 from './fullpro1img/user-2.png';
import img23 from './fullpro1img/user-3.png';

import img24 from "./fullpro1img/logo-godrej.png"
import img25 from "./fullpro1img/logo-oppo.png"
import img26 from "./fullpro1img/logo-paypal.png"
import img27 from "./fullpro1img/logo-philips.png"
import img28 from "./fullpro1img/logo-coca-cola.png"

import Footer from "./Footer";


const Home = () => {

    

    return (<>
        <div className=" xcontainer">
            <div className="homex_container">
                <div className="smallx_container">
                   <Navbar/>
                    
                    {/* home body part started ; */}

                    <div className="homex_row">
                        <div className="homex_col1">
                            <h1>Give your workout <br /> a new style !</h1>
                            <p>Success isn't always about greatness. It's about consistency. Consistent  hard work gains success. Greatness will come.</p>
                            <NavLink exact to=
                                "#" className="pr1btn">Explore Now
                       <TrendingFlatIcon /> </NavLink>
                        </div>
                        <div className="homex_col2">
                            <img src={img4} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            {/* now the categories section of the project started ; */}
            <div className="smallx_container">
                <div className="categoryx">
                    <div className="categoryx_col1">
                        <img src={img5} alt="category.img" />
                    </div>
                    <div className="categoryx_col2">
                        <img src={img6} alt="category.img" />
                    </div>
                    <div className="categoryx_col3">
                        <img src={img7} alt="category.img" />
                    </div>
                </div>
            </div>

            {/* now the featured section started of this project  */}

            <div className="smallx_container">
                <h2 className="productsx_heading">Featured Products</h2>
                <div className="featuredx">

                    <Featurecard
                        img={img8}
                        text="Red printed t-shirt"
                        price="$60.00" 
                        link = "/project/fullstack/project1/products/tshirt"/>

                    <Featurecard
                        img={img9}
                        text="HRX sports shoes"
                        price="$93.00" 

                        link = "#"/>
                    <Featurecard
                        img={img10}
                        text="HRX gray trackpants "
                        price="$76.00" 
                        link = "#"/>

                    <Featurecard
                        img={img11}
                        text="blue printed t-shirt"
                        price="$45.87" 
                        link = "#"/>
                </div>
            </div>

            {/* here the latest products started; */}

            <div className="smallx_container">
                <h2 className="productsx_heading">Latest Products</h2>
                <div className="featuredx">

                    <Featurecard
                        img={img12}
                        text="puma gray sports shoes"
                        price="$69.00" 
                        link = "#"/>
                    <Featurecard
                        img={img13}
                        text="black printed t-shirt"
                        price="$99.00" 
                        link = "#"/>
                    <Featurecard
                        img={img14}
                        text=" HRX set of 3 socks "
                        price="$76.00" 
                        link = "#"/>
                    <Featurecard
                        img={img15}
                        text="black fossil watch"
                        price="$65.34" 
                        link = "#"/>
                </div>
                <div className="featuredx">

                    <Featurecard
                        img={img16}
                        text="black sportx watch"
                        price="$70.00" 
                        link = "#"/>
                    <Featurecard
                        img={img17}
                        text="black HRX shoes"
                        price="$93.00" 
                        link = "#"/>
                    <Featurecard
                        img={img18}
                        text="gray nike shoes "
                        price="$74.70" 
                        link = "#"/>
                    <Featurecard
                        img={img19}
                        text="HRX black trackpants"
                        price="$76.87" 
                        link = "#"/>
                </div>
            </div>

            {/* now we are going to start  the offers section of the wesite */}

            <div className="homex_container">
                <div className="smallx_container">
                    <div className="offerx_row">
                        <div className="offerx_col1">
                            <img src={img20} alt="exclusive" />
                        </div>
                        <div className="offerx_col2">
                            <h4>Exclusively Available on RedStore</h4>
                            <h1>Smart Band 4</h1>
                            <p>The Mi Smart Band 4 Features a 39.8% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness . so everything is clear as can be !</p>
                            <NavLink exact to=
                                "/" className="pr1btn">Buy Now
                       <TrendingFlatIcon /> </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* now we are going to design the testimonial section ; */}

            <div className="smallx_container">
                <div className="testimonialx">
                    <Testimonial
                        img={img21}
                        name="Sean Parker" />
                    <Testimonial
                        img={img22}
                        name="Mike Smith" />
                    <Testimonial
                        img={img23}
                        name="Mabel Joe" />
                </div>
            </div>

            {/* the brand section started here*/}

            <div className="smallx_container">
                <div className="brandx">
                    <div className="logo">
                        <img src={img24} alt="logo" />
                    </div>
                    <div className="logo">
                        <img src={img25} alt="logo" />
                    </div>
                    <div className="logo">
                        <img src={img26} alt="logo" />
                    </div>
                    <div className="logo">
                        <img src={img27} alt="logo" />
                    </div>
                    <div className="logo">
                        <img src={img28} alt="logo" />
                    </div>
                </div>
            </div>

            {/* footer part started here */}

            <Footer/>
        </div>

    </>)
}

// exporting the default file ;
export default Home;