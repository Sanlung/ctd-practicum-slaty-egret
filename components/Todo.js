import moment from 'moment';
import React from 'react';
import { db } from "../config/firebaseConfig";
import { deleteDoc } from 'firebase/firestore';
import {doc} from "firebase/firestore";

const Todo = ({id, timestamp, title}) => {

    const deleteTodo = async (id, e) => {
        e.stopPropagation();
        const docRef = doc(db, "todos", id);
        await deleteDoc(docRef)
    }
  return (
  
    <div>
        {title}&nbsp;
        {moment(timestamp).format ("D MMM, hh:mm a")}
        <button onClick={e=>deleteTodo(id, e)}>Delete</button>

    </div>
  )
};

export default Todo;
