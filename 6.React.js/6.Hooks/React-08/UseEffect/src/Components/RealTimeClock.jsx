import { useEffect, useState } from "react";

function Clock() {
    const [time,setTime]=useState(null)
    useEffect(()=>{
        const Interval = setInterval(()=>{
            setTime(new Date())
        },1000)

        return (()=>clearInterval(Interval))
    })
    return ( 
    <>
    <h1>Time: {time && time.toLocaleTimeString()}</h1>
    </> 
    );
}

export default Clock;