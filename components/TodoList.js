import { collection, onSnapshot, orderBy, query, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {db} from "../config/firebaseConfig";
import Todo from "./Todo";


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
        {todos.map(todo=> <Todo key={todo.id}
        id = {todo.id}
        title={todo.title}
        timestamp={todo.timestamp}
        />)}
    
</div>
  )
  
}
export default TodoList;
