// const AddNewEntryForm = ({entryType, addFunc}) => (
//   <div>
//     <button type='button' onClick={addFunc}>
//       {/* <FontAwesomeIcon icon={faPlus} /> */}Add {entryType}
//     </button>
//   </div>
// );

// export default AddNewEntryForm;
import React, {useState} from 'react';
import { db } from '../config/firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const AddNewEntryForm = () => {
    const [todo, setTodo] = useState({title: ''})
    const onSubmit = async () => {
        const collectionRef = collection(db, "todos")
        const docRef = await addDoc (collectionRef, {...todo, timestamp:
        serverTimestamp () })
        setTodo({ title: ''}) 
        console.log(todo)
    }
        
  return  (
  <div>
      <h2>Todo List</h2>
       
       <input
        value={todo.title}
        onChange={e=> setTodo({...todo, title: e.target.value})}
        />
    
      <button onClick={onSubmit}> + </button>
      
  </div>
  
  )
}

export default AddNewEntryForm;

