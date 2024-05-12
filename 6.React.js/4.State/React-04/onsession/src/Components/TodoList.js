import { useState } from "react";
import AddTodo from "./AddTodo";

function TodoList() {
    const[todos, setTodos] = useState([]);
    const addTodo = (task) => {
        setTodos([...todos,task])
    }
    return ( <>
    <ul>
        {
            todos.map((item)=>(
                <li key={item}>{item}</li>,
                console.log(item)
            ))
        }
    </ul>
        <AddTodo addTodo={addTodo}/>
                </> );
}

export default TodoList;