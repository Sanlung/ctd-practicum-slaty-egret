import {useState} from "react";
import style from "../../styles/Logedin.module.css";
import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPlus
);

const AddTodoForm = ({isDisabled, onAddTodo}) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(title);
    setTitle("");
  };

  return (
    <form className={style.newTaskForm} onSubmit={handleSubmit}>
      <button className={style.btn} type='submit' disabled={isDisabled || !title}>
      <FontAwesomeIcon icon={faPlus}/>
      </button>
      <input className={style.newTaskInput}
        name='addTodo'
        type='text'
        value={title}
        placeholder='Add Todo'
        onChange={handleTitleChange}
      />
    </form>
  );
};

export default AddTodoForm;
