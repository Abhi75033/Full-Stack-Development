import { Children, createContext, useContext, useState } from "react";

const Mycontext = createContext();

function MycontextProvider({Children}) {
    const [data,setData]=useState('msg from GrandParent')
    return ( 
        <Mycontext.Provider value={{data,setData}}>
            {Children}
        </Mycontext.Provider>
     );
}

export default MycontextProvider;

export const useMyContext =()=>{
    return useContext(Mycontext)
}