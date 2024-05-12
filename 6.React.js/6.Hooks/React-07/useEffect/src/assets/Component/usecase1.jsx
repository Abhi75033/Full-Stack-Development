import { useEffect, useState } from "react";

function Usecase1() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(()=>{
        console.log('useEffect')
        return ()=>{
            console.log('componet Unmount')
        }
    },[])
    useEffect(()=>{
        console.log('name: ',name)
        return ()=>{
            console.log('Previous name removed: ',name)
        }
    },[name])

    useEffect(()=>{
        console.log('Count: ',count)
        return ()=>{
            console.log('Previous count removed: ',count)
        }
    },[count])

    return (
     <div className="container">
    <h3>name: {name}</h3>    
    <input type="text" value={name} 
    onChange={(e)=>setName(e.target.value)} className="form-control"/>
    <div className='container text-center'>
     <h1>Counter {count}</h1>
     <button onClick={()=>setCount(count+1)} className='btn btn-primary'>+</button>
     <button onClick={()=>setCount(count-1)} className='btn btn-primary ms-2'>-</button>
    </div>
    </div> 
    );
}

export default Usecase1;