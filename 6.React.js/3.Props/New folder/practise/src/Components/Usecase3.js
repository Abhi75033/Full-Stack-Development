import { useState } from "react";

function Usecase3() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    return ( 
    <>
    <h1>Welcome {name}</h1>
    <h2>Email: {email}</h2>
    <input type="text" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value.toLocaleUpperCase())}/>
    <input type="text" placeholder="Enter your Emial" onChange={(e)=>setEmail(e.target.value)}/>
   </> 
    );
}

export default Usecase3;