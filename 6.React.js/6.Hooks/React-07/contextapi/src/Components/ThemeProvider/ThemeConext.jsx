import { createContext, useContext, useState } from "react";

const MyThemeContext = createContext();

function ThemeProvider({Children}) {
    const [theme,setTheme]=useState('light')
    const toggleTheme =()=>{
        setTheme(prev=>prev==='light'?'dark':'light')
    }
    return ( 
        <MyThemeContext.Provider value={{theme,toggleTheme}}>
            {Children}
        </MyThemeContext.Provider>
     );
}

export default ThemeProvider;

export const useThemeContext=()=>{
    return useContext(MyThemeContext)
}