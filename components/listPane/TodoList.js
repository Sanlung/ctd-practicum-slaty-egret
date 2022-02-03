// import TodoListItem from "./TodoListItem;";

// const list = [{id: "1", title: "First item"}];

// const TodoList = ({list}) => (
//   <>
//     <ul>
//       {list.map((item) => (
//         <TodoListItem key={item.id} item={item} />
//       ))}
//     </ul>
//   </>
// );

// export default TodoList;

import TodoListItem from "./TodoListItem";
import { collection, onSnapshot, orderBy, query, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from "../../config/firebaseConfig";

const TodoList = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const collectionRef = collection( db, "todos")

        const q = query(collectionRef, orderBy("timestamp" , "desc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setTodos(querySnapshot.docs.map(doc => ({...doc.data(), id:doc.id, timestamp: doc.data().
                timestamp?.toDate().getTime() })))
        });
        return unsubscribe;

    }, [])
    
  return (
    <div>
        {todos.map(todo=> <TodoListItem key={todo.id}
        id = {todo.id}
        title={todo.title}
        timestamp={todo.timestamp}
        />)}
    
</div>
  )
  
}
export default TodoList;