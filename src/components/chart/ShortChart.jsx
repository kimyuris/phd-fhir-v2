import React, {  useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.css';
import axios from 'axios';


 export default function ShortChart() {

  const [chartData, setChartData] = useState([]);

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
  

   return (
     <div>
       <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="val1" fill="#8884d8" />
          <Bar dataKey="val2" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
     </div>
   )
}