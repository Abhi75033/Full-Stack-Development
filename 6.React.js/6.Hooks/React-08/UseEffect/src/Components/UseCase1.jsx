import { useEffect, useState } from "react";

function UseCase1() {
    const [name,setNmae]=useState('')
    useEffect(()=>{
        console.log('Component Renderd');
        return (()=>console.log('Component UnMounted'))
    },[])
    useEffect(()=>{
        console.log('value: ',name);
        return (()=>console.log('Old Value returned',name))
    },[name])
    return (
    <>
    <div className="text-center">
        <h1>UseCase1</h1>
        <h1>Name:{name}</h1>
        <input type="text" onChange={(e)=>setNmae(e.target.value)}/>
    </div>
    </>
     );
}

export default UseCase1;