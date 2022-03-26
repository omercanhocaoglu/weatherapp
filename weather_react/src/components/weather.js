import { useState } from "react";
import "./style/weather.css";
import "./style/result.css";
import Result from './result.js';
import {useTheme} from "./ThemeContext.js"



function Weather () {
    
const API_KEY="d3dcba5d51d24fd6b68190413222403";

let Cityinput ="";

const [WeatherData,setWeatherData] = useState([]);







function Citytext () {
    document.querySelector("input").addEventListener("input",(e)=>{
        e.preventDefault();
        Cityinput=e.target.value;
        console.log(Cityinput);
    })
}

async function Getdata (value) {

    const Data= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${value}&days=7&aqi=no&alerts=no `)

    const setResult = await Data.json();
    console.log(setResult);

    setWeatherData (setResult.forecast.forecastday)

    console.log(setResult.forecast.forecastday);

    

    
}


return( 




<div className="Weather">

 




<div className="divdiv"> Welcome to Weather!  <br/>
<div>  <input className="weatherinput" placeholder="Search a City" onChange={Citytext} />  
    
     <button className="button"     onClick={()=>Getdata(Cityinput)}>Search</button> </div>

     

   
    
</div> 

{WeatherData.map(item=>(<Result key={item.date} date={item.date} mintemp={item.day.mintemp_c} maxtemp={item.day.maxtemp_c}   

condition={item.day.condition.text} icon={item.day.condition.icon}




/>))}           
                           


</div>


)};


export default Weather;


  

