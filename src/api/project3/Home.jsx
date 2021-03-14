// This is the best project here we are going to build an covid -19 tracker  it will track the record of the covid-19 of the whole world ;

import React, { useState, useEffect } from "react";
import "./apipro3.css";

// importing the map component ;
import Map from "./Map";
import Linegraph from "./Linegraph";

const Apipro3home = () => {

    // fetching data from the api ;

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("Worldwide")
    const [data, setData] = useState({
        cases: "14.7m",
        recovered: "8.8m",
        deaths: "610.7k",
        caseperm: "17.7m",
        recoveredperm: "23.4k",
        deathsperm: "43.8K",
        country : "Worldwide"
    })

    const [type , setType] = useState({
        cls : "cases",
        color : "red"
    });


    // using state to define the background color of the boxes ;

    const [bgcolor , setBgcolor] = useState({
        box1 : "",
        box2 : "",
        box3 : ""
    })


    useEffect(() => {
        const getCountries = async () => {
            const result = await fetch("https://disease.sh/v3/covid-19/countries").then(res => res.json()).then(data => {
                console.log(data)
                setCountries(data)

            })
        }
        getCountries();
    }, [])


    // here we are going to change the type of the cases either it is revocered deaths or active cases;

    
    const inputEvent = (event) => {

        const countrycode = event.target.value;
        // fetching data by the help of country name ;

        if (countrycode === "Worldwide") {
            const worldwide = fetch("https://disease.sh/v3/covid-19/all").then(res => res.json()).then(worlddata => {

            console.log(worlddata)
                setData((predata) => {
                    return {
                        cases: worlddata.cases,
                        recovered: worlddata.recovered,
                        deaths: worlddata.deaths,
                        caseperm: worlddata.casesPerOneMillion,
                        recoveredperm: worlddata.recoveredPerOneMillion,
                        deathsperm: worlddata.deathsPerOneMillion,
                        country : worlddata
                    }
                })
            }).catch((err) => {
                alert("Please , Check your internet connection")
            })
        }

        else fetch(`https://disease.sh/v3/covid-19/countries/${countrycode}?strict=true`).then(res => res.json()).then(countrydata => {

            console.log(countrydata)

            setData((olddata) => {
                return {
                    cases: countrydata.cases,
                    recovered: countrydata.recovered,
                    deaths: countrydata.deaths,
                    caseperm: countrydata.casesPerOneMillion,
                    recoveredperm: countrydata.recoveredPerOneMillion,
                    deathsperm: countrydata.deathsPerOneMillion ,
                    country : countrydata.country
                    
                }
            })
        }).catch((err) => {
            alert("Please check Your internet connection !")
        })


        setCountry(countrycode)


    }


    // describing onclick options here ;

    const casestype = () =>{

        setBgcolor((prevdata) =>{
            return {
                box1 : "yellow",
                box2 : "white",
                box3 : "white"
            }
        })

        setType((olddata) =>{
            return {
                cls : "cases" ,
                color : "red" 
            }
        })
    }

    const recoveredtype = () =>{

        setBgcolor((prevdata) =>{
            return {
                box1 : "white",
                box2 : "yellow",
                box3 : "white"
            }
        })

        setType((olddata) =>{
            return {
                cls : "recovered" ,
                color : "green",
                
            }
        })
    }

    const deathstype = () =>{

        setBgcolor((prevdata) =>{
            return {
                box1 : "white",
                box2 : "white",
                box3 : "yellow"
            }
        })

        setType((olddata) =>{
            return {
                cls : "deaths" ,
                color : "orange"
            }
        })
    }

    const box1 = {
        
        background : bgcolor.box1
    }   

    const box2 = {
        background : bgcolor.box2
    }

    const box3 = {
        background  : bgcolor.box3
    }

    return (<>
        <div className="api3 mode">
            <div className="api3_container1">
                <div className="api3_header">
                    <h1>COVID-19 TRACKER</h1>
                    <select name="" id="" className="box" value={country} onChange={inputEvent} >

                        <option value="Worldwide">Worldwide</option>

                        {countries.map((item, index) => {
                            return <option value={item.value} key={index} >{item.country}</option>
                        })}
                    </select>
                </div>

                {/* here we are going to create a information boxes  */}

                <div className="api3_info_box">
                    <div className="api3_info_box1 box"  onClick ={casestype} value = "cases" style ={box1}>
                        <h4>Coronavirus Cases</h4>
                        <h2>{data.cases} Total</h2>
                        <h5>{data.caseperm} casesPerMillion</h5>

                    </div>
                    <div className="api3_info_box2 box"  onClick ={recoveredtype}  value = "recovered" style = {box2}>
                        <h4>Recovered Cases</h4>
                        <h2>{data.recovered} Total</h2>
                        <h5> {data.recoveredperm} recoveredPerMillion</h5>
                    </div>
                    <div className="api3_info_box3 box"  onClick ={deathstype}  value = "deaths"  style = {box3}>
                        <h4>Death Cases</h4>
                        <h2>{data.deaths} Total</h2>
                        <h5>{data.deathsperm} deathsPerMillion</h5>
                    </div>
                </div>

                {/* here we are going to use the google map to show our project here  */}
            <div className="api3_box1_map">
                <div className="api3_box_map">
                <Linegraph 
                country = {data.country}
                types = {type.cls}
                color = {type.color}/>
                </div>
                </div>
                
            </div>
            <div className="api3_container2">
                <div className="api3_container2_cases">
                    <p>Live Cases by Country</p>

                    <div className="api3_container2_list">
                        {countries.map((item, index) => {
                            return (<>
                                <div className="api3_container2_smalllist">
                                    <h5 id={index}>{item.country}</h5>
                                    <h5 >{item.cases}</h5>
                                </div>
                            </>)
                        })}
                    </div>

                </div>
               
            </div>
        </div>

    </>)
}

// exporting the covid-19 tracker main file ;

export default Apipro3home;

