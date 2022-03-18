import React, { PureComponent, useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.css';
import axios from 'axios';




export default function Chart() {
 
    const [chartData, setChartData] = useState([]);
   
// const map = result(name);    
    

    // const map = result('Brekke496') //name 받아오기 안됨.
    //     .then(data => {
    //       setChartData(data)} )
    //   .catch(error => {
    //     console.log(error)
    // },[setChartData]);

    useEffect(() => {
        // 컴포넌트가 마운트 되고 setTimeout함수를실행합니다.
        setTimeout(() => {
            result('Brekke496');
        }, 1000);   
      }, []);

      
      

    const result = async(name) => {
        try{ //반복부분
            const {data : {entry}} = await  axios.get(`http://101.101.219.200:9080/hapi-fhir-jpaserver/fhir/Observation?patient.name=${name}&code=http://loinc.org|55284-4`);
            const obj = [];
            
            for(let i=0; i < entry.length; i++){
                let data = {
                    date: entry[i].resource.effectiveDateTime.substring(0,7),
                    val1: entry[i].resource.component[0].valueQuantity.value.toString().split('.')[0],
                    val2: entry[i].resource.component[1].valueQuantity.value.toString().split('.')[0]
                }
                obj.push(data);
               
                obj.sort((a, b) => a.date.localeCompare(b.date));                
               
            }


            // return obj;
            setChartData(obj);
            
            
            console.log(obj)
        } catch(error){
            console.log(error);
        }
       }
      
      console.log("ddd");


    return (
        
    <div className="chart">
        <h3 className="chartTitle"></h3>
        <ResponsiveContainer width="100%" aspect={3 / 1}>
            <LineChart data={chartData} >
                
                <XAxis dataKey="date" stroke="5550bd" />
                <Line type="monotone" dataKey="val2" />
                <Line type="monotone" dataKey="val1" />
                <Tooltip />
                <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
            </LineChart>
        </ResponsiveContainer>
    </div>
    )

    
}