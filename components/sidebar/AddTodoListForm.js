import {useState} from "react";
import style from "../../styles/Logedin.module.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPlus
);
const AddTodoListForm = ({isDisabled, onAddTodoList}) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodoList(title);
    setTitle("");
  };

  return (
    <form className={style.newListForm} onSubmit={handleSubmit}>
      <button className={style.iconAddTodo} type='submit' disabled={isDisabled || !title}>
      <span className={style.circle}><FontAwesomeIcon icon={faPlus}/></span>
      </button>
      <input className={style.newListInput}
        name='addList'
        type='text'
        value={title}
        placeholder='New List'
        onChange={handleTitleChange}
      />
    </form>
  );
};

export default AddTodoListForm;
