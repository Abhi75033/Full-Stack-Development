import { useState } from "react";
import AddTodos from "./AddTodos";

function TodoList() {
  const [todos, setTodo] = useState([]);
  const addTask = (task) => {
    setTodo([...todos, task]);
  };
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <AddTodos addTask={addTask}/>
    </div>
  );
}

export default TodoList;
