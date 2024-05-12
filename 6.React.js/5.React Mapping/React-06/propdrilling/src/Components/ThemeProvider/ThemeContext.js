import { createContext, useState } from "react";

const MyThemeConatext = createContext();
function ThemeProvider({chidren}) {
const [theme,setTheme]=useState('light')

const toggleTheme=()=>{
    setTheme(theme==='light'?'dark':'light')
}
    
    return (<MyThemeConatext.Provider value={{theme,toggleTheme}}>
        {chidren}
    </MyThemeConatext.Provider> );
}

export default ThemeProvider;

const useTheme=()=>{
    return useContext(MyThemeConatext)
}