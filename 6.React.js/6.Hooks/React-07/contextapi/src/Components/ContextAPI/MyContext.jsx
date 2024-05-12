import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// Stage 1 :- Create Conext 
const MyConext = createContext();

function Mycontext({children}) {
    const [data,setData]=useState('Hello Child from Grand Grand Parent')
    // Stage:-2  Set the provider
    return ( 
    <MyConext.Provider value={{data,setData}}>
          {children}
    </MyConext.Provider>
     );
}

export default Mycontext;
// Stage:-3 export the context for use
export const useMyContxet = ()=>{
    return useContext(MyConext)
}