 
 import React,{useState,useEffect} from "react"
 function useEff(){

    const[data,setData]=useState([]);
    const[city,setCityInput]=useState('')
    useEffect(()=>{
    fetch(`http://localhost:4000/weather/${city}`)
    .then((user)=>user.json())
    .then((data)=>setData(data));
    },[])
    const filterHandler=data.filter((value)=>{
      return value.city===city
    })
    return (
        <div>
            <h1>My use effect hook practice</h1>
         <input
         type="text"
         placeholder="Enter city...."
         value={city}
         onChange={(e)=>setCityInput(e.target.value)}
         style={{width:'30%'}}
         />
         {filterHandler.map((item)=>(
           <ul key={item.city}>
           <li>{item.city}</li>
            <p>{item.temp_C}</p>
            <p>{item.temp_F}</p>
            <p>{item.condition}</p>
            <p>{item.humidity}</p>
            <p>{item.sunrise}</p>
            <p>{item.sunset}</p>
            <p>{item.air_quality}</p>
           
         </ul>
         )
        )}
          
        </div>
    )
 }
 export default useEff;