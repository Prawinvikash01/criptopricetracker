import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import './LineChart.css'

const LineChart = ({historicaldata}) => {
const [data,setdata] = useState([["date","prices"]]);

useEffect(()=>{
    let datacopy = [["date","prices"]];
    if(historicaldata.prices){
        historicaldata.prices.map((item)=>{
            datacopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
        })
        setdata(datacopy);
    }


},[historicaldata])
  return (
    <Chart
       chartType='LineChart'
       data={data}
       height="100%"
       legendToggle
    />
  )
}

export default LineChart