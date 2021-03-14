// This is home file of the first api project which we are going to build here ;


import React, { useState } from 'react'
import "./apipro1.css";


import SearchIcon from '@material-ui/icons/Search';



const Apipro1home = () => {

    const [values, setValue] = useState()
    const [result, setResult] = useState([])

    const inputEvent = (event) => {
        setValue(event.target.value)

    }
    const fetchdata = () => {
         fetch(`https://api.unsplash.com/search/photos?client_id=MUVRFyIvDEDjl3eD7-1iGjSKITT0W4kjHcv5E4GDBS0&query=${values}&per_page=24`).then((res) =>res.json()).then((data)=>{
             setResult(data.results)
             console.log(data)
         })
        
    }





    return (<>
        <div className="api1">
            <div className="api1_search">

                <input type="text"
                    placeholder="Search Images"
                    value={values}
                    onChange={inputEvent} />

                <SearchIcon className="api1_searchicon" style={{ fontSize: "3rem" }} onClick={fetchdata} />
            </div>

            <div className="api1_result">
               

            {result.map((item)=>{
                return <img src={item.urls.regular} alt="pic"/>
                }
            )}
                 

            </div>
        </div>
    </>)
}


// exporting the first file of this api project ;

export default Apipro1home;



//MUVRFyIvDEDjl3eD7-1iGjSKITT0W4kjHcv5E4GDBS0
//https://api.unsplash.com/
///search/photos
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY



{/* {result.map((item) =>{
                        return <img src={item.urls.regular} alt=""/>
                    })} */}