import { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setTime(time+1)
        },1000)
    })

    const [timer,setTimer]=useState(null)

   useEffect(()=>{
    const interval = setInterval(()=>{
        setTimer(new Date())
    },1000)
   })
    return ( 
    <>
    <h1>Time {time}</h1>
    <h1>Timer {timer && timer.toLocaleTimeString()}</h1>
    </> 
    );
}

export default Timer;