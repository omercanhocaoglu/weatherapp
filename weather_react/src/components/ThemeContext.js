import {useState,useEffect,createContext, useContext} from "react";
import "./style/weather.css";



const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

const [Theme,setTheme] = useState (localStorage.getItem("Theme") || "Light" );

useEffect  (()=>{localStorage.setItem("Theme",Theme)},[Theme]);

const values = {Theme,setTheme};



    
    
    
    
    
    
return(
    
    <ThemeContext.Provider value={values}>     
    
     
    
    
    
    
     {children}                  </ThemeContext.Provider>


)};

export const useTheme = () => useContext(ThemeContext);