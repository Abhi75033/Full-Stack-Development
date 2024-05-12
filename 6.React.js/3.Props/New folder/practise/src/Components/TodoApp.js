import { useState } from "react";

function TodoApp() {
    const [todos,setTodos]=useState([])
    const [input,setInput]=useState('')
    const addHandler=()=>{
        if(input===''){
            return  alert('Please Enter Your Task')
          }
        setTodos([...todos,input])
        
        setInput('')
    }

    const deleteAll = ()=>{
        setTodos([])
    }

    const deleteTask =(item)=>{
        let index = todos.indexOf(item)
        let newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }
    return ( 
    <div>
    <h1 className="text-bg-danger text-center pb-2 pt-2 mt-2">Todo Application</h1>
    <div className="form-group">
    <label className="mt-3">Enter Your Task :</label>
    <input type="text"  placeholder="@exmaple:Do your....." className="form-control mt-3" 
    onChange={(e)=>setInput(e.target.value)}  value={input}/> &nbsp;
    </div>
     

    <button onClick={addHandler} className="btn btn-primary mt-2 w-100">Add Task</button>
    <h1 className="mt-2 text-center">My Todos</h1>
    <ul className="list-group">
        {
            todos.map((item)=>(
                <>
                <li className="list-group-item" key={item}>{item} 
                <button  onClick={()=>deleteTask(item)}
                 className="btn btn-danger float-end" >X</button> </li>
                </>
            ))
        }
    </ul>
        {
            todos.length>0 && <button onClick={deleteAll} className="btn 
            btn-warning mt-2 w-100">Delete All</button>
        }
    </div> 
    );
}

export default TodoApp;