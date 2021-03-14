import React, { useState, useEffect } from 'react'

import { Line } from "react-chartjs-2";

function Linegraph(props) {

    const [data, setData] = useState({})
    const countryname = props.country;
    
    


    
    const mapdata =(name) => {

        
        

        fetch(` https://disease.sh/v3/covid-19/historical/${name}?lastdays=120`).then(res => res.json()).then((data) => {

       const casetype = props.types;
       const backgroundcolor = props.color;
      
            
        var Data = data.timeline[casetype]
       
        console.log(Data)
            
 
            const objkeys = Object.keys(Data)
            const objvalues = Object.values(Data)

            

            const values = [];

            for(let i=0; i<objvalues.length; i++){

               const a = objvalues[i+1] - objvalues[i]
               values.push(a)
            }

            console.log(values)
            


            setData((olddata) => {
                return {
                    labels: objkeys,
                    datasets: [{
                        label : casetype,
                        data : values,
                        backgroundColor : backgroundcolor,
                        pointBorderWidht :1 ,
                        pointBorderColor : "blue",
                        pointBackgroundColor: "blue",
                        pointRadius : 2
                    }
                    ]
                }
            })


        }).catch((err) => {
            console.log(err)
        })
    }

    mapdata(countryname);

    return (
        <div>
            <Line  
                data={data}
            />
            
        </div>
    )
}

export default Linegraph


// https://disease.sh/v3/covid-19/historical/india?lastdays=120

//  "https://disease.sh/v3/covid-19/historical/all?lastdays=120"
