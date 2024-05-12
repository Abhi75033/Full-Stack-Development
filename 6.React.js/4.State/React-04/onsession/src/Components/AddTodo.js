import { useState } from "react";

function AddTodo({addtask}) {
    const[input,setInput] = useState('');
    const handler = ()=>{
        addtask= input;
        setInput('');
    }
    return ( <>
    
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={handler}>Add Task</button>

    </> );
}

export default AddTodo;