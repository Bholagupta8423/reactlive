// This is the only rough portion of chart.js portion ;j

// here we are  going to build all the chart project ;

import React from "react";
import {Line} from "react-chartjs-2"


const Linegraph2 = () =>{

    const data = {
        labels : ["jan" , "feb" , "march" , "apr" , "may" , "june" , "july" ,"jan" , "feb" , "march" , "apr" , "may" , "june" , "july","jan" , "feb" , "march" , "apr" , "may" , "june" , "july","jan" , "feb" , "march" , "apr" , "may" , "june" , "july","jan" , "feb" , "march" , "apr" , "may" , "june" , "july","jan" , "feb" , "march" , "apr" , "may" , "june" , "july" , "jan" , "feb" , "march" , "apr" , "may" , "june" , "july" ,"jan" , "feb" , "march" , "apr" , "may" , "june" , "july","jan" , "feb" , "march" , "apr" , "may" , "june" , "july","jan" , "feb" , "march" , "apr" , "may" , "june" , "july","jan" , "feb" , "march" , "apr" , "may" , "june" , "july","jan" , "feb" , "march" , "apr" , "may" , "june" , "july" ,"jan" , "feb" , "march" , "apr" , "may" , "june" , "july" ,"jan" , "feb" , "march" , "apr" , "may" , "june" , "july","jan" , "feb" , "march" , "apr" , "may" , "june" , "july","jan" , "feb" , "march" , "apr" , "may" , "june" , "july","jan" , "feb" , "march" , "apr" , "may" , "june" , "july","jan" , "feb" , "march" , "apr" , "may" , "june" , "july" ,],

        datasets : [{
            label  : "Sales in 2020 " ,
            data : [ 2,5,4 , 6 ,8 ,4 ,3 ,2,5,4 , 6 ,8 ,4 ,3 , 2,5,4 , 6 ,8 ,4 ,3 , 2,5,4 , 6 ,8 ,4 ,3 , 2,5,4 , 6 ,8 ,4 ,3 , 2,5,4 , 6 ,8 ,4 ,3 , 2,5,4 , 6 ,8 ,4 ,3 ,2,5,4 , 6 ,8 ,4 ,3 , 2,5,4 , 6 ,8 ,4 ,3 , 2,5,4 , 6 ,8 ,4 ,3 , 2,5,4 , 6 ,8 ,4 ,3 , 2,5,4 , 6 ,8 ,4 ,3 , 2,5,4 , 6 ,8 ,4 ,3 ,2,5,4 , 6 ,8 ,4 ,3 , 2,5,4 , 6 ,8 ,4 ,3 , 2,5,4 , 6 ,8 ,4 ,3 , 2,5,4 , 6 ,8 ,4 ,3 , 2,5,4 , 6 ,8 ,4 ,3 ,  ],
            backgroundColor : "red"
        }]
    }
    return(<>
        <Line  
        data = {data}/>
    </>)
}

// exporting  the file s
export default Linegraph2;
