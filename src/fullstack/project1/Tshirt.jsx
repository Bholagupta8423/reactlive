// This is the page where we are going to design the tshirt of the website  and other details will inputed here  about the tshir t


import React, { useState } from "react";
import "./project1.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "./fullpro1img/gallery-1.jpg"
import img2 from "./fullpro1img/gallery-2.jpg"
import img3 from "./fullpro1img/gallery-3.jpg"
import img4 from "./fullpro1img/gallery-4.jpg"
import img5 from './fullpro1img/product-1.jpg';
import { NavLink } from 'react-router-dom';
import Featurecard from './Featurecard';
import img16 from "./fullpro1img/product-9.jpg";
import img17 from "./fullpro1img/product-10.jpg";
import img18 from "./fullpro1img/product-11.jpg";
import img19 from "./fullpro1img/product-12.jpg";


const Tshirt = () => {

    const [img, setImg] = useState(img1)

    const changeimg = (event) => {
        const num = event.target.name;
        if (num === "img1") {
            setImg(img1)
        }
        else if (num === "img2") {
            setImg(img2)
        }
        else if (num === "img3") {
            setImg(img3)
        }
        else if (num === "img4") {
            setImg(img4)
        }


    }
    return (<>

        <div className="tshirtx_container">
            <Navbar />
            <div className="tshirtx_row">
                <div className="tshirtx_col1">
                    <div className="tshirtx_bimg">
                        <img src={img} alt="" />
                    </div>
                    <div className="tshirtx_simg">
                        <div className="tshirtx_limg">
                            <div className="tshirtx_vlimg"><img src={img1} alt="img" name="img1" onClick={changeimg} /></div>
                            <div className="tshirtx_vlimg"><img src={img2} alt="img" name="img2" onClick={changeimg} /></div>
                            <div className="tshirtx_vlimg"><img src={img3} alt="img" name="img3" onClick={changeimg} /></div>
                            <div className="tshirtx_vlimg"><img src={img4} alt="img" name="img4" onClick={changeimg} /></div>


                        </div>
                    </div>
                </div>
                <div className="tshirtx_col2">
                    <h4>Home/T-shirt</h4>
                    <h1>Red Printed Tshirt <br /> by HRX </h1>
                    <h3>$50.00</h3>
                    <select name="" id="size">
                        <option value="size ">Select Size</option>
                        <option value="size ">XXL</option>
                        <option value="size ">XL</option>
                        <option value="size ">Large</option>
                        <option value="size ">Meduim</option>
                        <option value="size ">Small</option>
                    </select>
                    <div className="input">
                        <input type="number" defaultValue="1" />
                        <NavLink exact to="#" className="pr1btn">Add To Cart</NavLink>
                    </div>
                    <h3>PRODUCT DETAILS</h3>
                    <p>Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys !</p>
                </div>
            </div>
            <div className="relatedprx">
                <h3>Related Products</h3>
                <h5>View More</h5>
            </div>

            <div className="featuredx">

                <Featurecard
                    img={img16}
                    text="black sportx watch"
                    price="$70.00"
                    link="#" />
                <Featurecard
                    img={img17}
                    text="black HRX shoes"
                    price="$93.00"
                    link="#" />
                <Featurecard
                    img={img18}
                    text="gray nike shoes "
                    price="$74.70"
                    link="#" />
                <Featurecard
                    img={img19}
                    text="HRX black trackpants"
                    price="$76.87"
                    link="#" />
            </div>
        </div>


        <Footer />

    </>)
}

export default Tshirt;