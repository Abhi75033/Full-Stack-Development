import { useState } from "react";

function Usecase2() {
    const [count,setCount] =useState(0)
    return ( 
    <>
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
    </> 
    );
}

export default Usecase2;