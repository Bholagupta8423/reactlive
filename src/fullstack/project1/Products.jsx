// This is second page of this website which we are g oing to create ;

import React from "react";
import "./project1.css";
import Navbar from './Navbar';
import {NavLink} from "react-router-dom";

import Featurecard from "./Featurecard";
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
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';


import Footer from './Footer';

const Products = () => {
    return (<>
        <div className="productx_container">
            <Navbar />
            <div className="productx_heading">
                <h2>All Products</h2>
                <select name="" id="price">
                    <option value="price">Short by Popularity</option>
                    <option value="price">Short by Price</option>
                    <option value="price">Short by Rating</option>
                    <option value="price">Short by Sale</option>
                </select>
            </div>

            <div className="productx_list">
                <div className="featuredx">

                    <Featurecard
                        img={img8}
                        text="Red printed t-shirt"
                        price="$60.00" 
                        link = "/project/fullstack/project1/products/tshirt" />
                    <Featurecard
                        img={img9}
                        text="HRX sports shoes"
                        price="$93.00" 
                        link = "/" />
                    <Featurecard
                        img={img10}
                        text="HRX gray trackpants "
                        price="$76.00" 
                        link = "/" />
                    <Featurecard
                        img={img11}
                        text="blue printed t-shirt"
                        price="$45.87" 
                        link = "/" />
                </div>

                <div className="featuredx">

                    <Featurecard
                        img={img12}
                        text="puma gray sports shoes"
                        price="$69.00" 
                        link = "/" />
                    <Featurecard
                        img={img13}
                        text="black printed t-shirt"
                        price="$99.00" 
                        link = "/" />
                    <Featurecard
                        img={img14}
                        text=" HRX set of 3 socks "
                        price="$76.00" 
                        link = "/" />
                    <Featurecard
                        img={img15}
                        text="black fossil watch"
                        price="$65.34" 
                        link = "/" />
                </div>
                <div className="featuredx">

                    <Featurecard
                        img={img16}
                        text="black sportx watch"
                        price="$70.00" 
                        link = "/" />
                    <Featurecard
                        img={img17}
                        text="black HRX shoes"
                        price="$93.00" 
                        link = "/" />
                    <Featurecard
                        img={img18}
                        text="gray nike shoes "
                        price="$74.70" 
                        link = "/" />
                    <Featurecard
                        img={img19}
                        text="HRX black trackpants"
                        price="$76.87" 
                        link = "/" />
                </div>
            </div>

           <div className="productx_btn">
               <h3>1</h3>
               <h3>2</h3>
               <h3>3</h3>
               <h3>4</h3>
               <h3><TrendingFlatIcon/></h3>
           </div>
            
        </div>
         {/* entering footer section into it */}

        <Footer/>
        
    </>)
}

// exporting the product file ;

export default Products;