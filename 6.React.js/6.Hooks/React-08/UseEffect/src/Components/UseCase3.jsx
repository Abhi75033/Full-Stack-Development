import { useEffect, useState } from "react";

function Timer() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        setTimeout(()=>setCount(count+1),1000)
    })
    return ( 
        <>
        <h1>Timer: {count}</h1>
        </>
     );
}

export default Timer;