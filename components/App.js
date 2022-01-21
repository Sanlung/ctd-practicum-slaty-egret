import React, { useState} from "react";
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';

function App() {
    const [todoList, setTodoList] = useState([]);
      const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo])
      }
  
      return (
        <div>
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} />
       </div>
      );
  }
  
  export default App;