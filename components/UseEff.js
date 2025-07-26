 
 import React,{useState,useEffect} from "react"
 function useEff(){

    const[data,setData]=useState(null);
    const[cityInput,setCityInput]=useState('')
    useEffect(()=>{
    fetch('https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}')
    .then((user)=>user.json())
    .then((data)=>setData(data));
    },[cityInput])
    return (
        <div>
            <h1>My use effect hook practice</h1>
         <input
         type="text"
         placeholder="Enter city...."
         value={cityInput}
         onChange={(e)=>setCityInput(e.target.value)}
         style={{width:'30%'}}
         />
         <h3>{data.location.name}</h3>
         <p>{data.current.temp_c}°C</p>
        </div>
    )
 }
 export default useEff;