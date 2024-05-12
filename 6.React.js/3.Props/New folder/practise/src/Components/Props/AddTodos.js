import { useState } from "react";

function AddTodos({addTask}) {
const [input,setInput]= useState('')
const handler = ()=>{
    addTask(input)
    setInput('')
}
    return ( 
    <div>
        <input type="text" placeholder="Enter Your Task" 
        onChange={(e)=>setInput(e.target.value)} value={input}/>

        <button onClick={handler}>Save Task</button>
    </div>
     );
}

export default AddTodos;