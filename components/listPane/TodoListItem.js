// const TodoListItem = ({item}) => (
//   <li>
//     <span>{item.title}</span>
//     <button type='button'>Remove</button>
//   </li>
// );

// export default TodoListItem;

import moment from 'moment';
import React, { useContext } from 'react';
import { deleteDoc } from 'firebase/firestore';
import {doc} from "firebase/firestore";
import { db } from '../../config/firebaseConfig';

const TodoListItem = ({id, timestamp, title}) => {

    const deleteTodo = async (id, e) => {
        e.stopPropagation();
        const docRef = doc( db, "todos", id);
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

export default TodoListItem;

