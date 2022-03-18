import axios from 'axios';



// const result = async(name) => {
//     try{ //반복부분
//         const {data : {entry}} = await  axios.get(`http://101.101.219.200:9080/hapi-fhir-jpaserver/fhir/Observation?patient.name=${name}&code=http://loinc.org|55284-4`);
//         // console.log("Dddd");

//         // const date = [] , val1 = [] , val2 = [];
//         const obj = [];
//         for(let i=0; i < entry.length; i++){
//             // date.push(entry[i].resource.effectiveDateTime.toString().substring(0, 7));
//             // val1.push(entry[i].resource.component[0].valueQuantity.value.toString().split('.')[0]);
//             // val2.push(entry[i].resource.component[1].valueQuantity.value.toString().split('.')[0]);
//             let data = {
// 				date: entry[i].resource.effectiveDateTime.substring(0,7),
// 				val1: entry[i].resource.component[0].valueQuantity.value.toString().split('.')[0],
// 				val2: entry[i].resource.component[1].valueQuantity.value.toString().split('.')[0]
// 			}
// 			obj.push(data)
         
        
//         }

//         //const map = [data, val1, val2];

//         // const map1 = {...date};
//         // const map2 = {...val1};
//         // const map3 = {...val2};
        

//         // console.log("111111",map1)
//         // console.log("22222",map2)
//         // console.log("33333",map3)

//         // const map = [map1, map2, map3];

//         //console.log(">>>>>>>>>>>",map)
//         // console.log(obj);
//         return obj;
       
//     } catch(error){
//         console.log(error);
//     }
      
//    }

//    export default result;