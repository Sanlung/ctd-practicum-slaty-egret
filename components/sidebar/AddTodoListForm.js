import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Loggedin.module.css";

const AddTodoListForm = ({onAddTodoList}) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodoList(title);
    setTitle("");
  };

  return (
    <form className={styles.newListForm} onSubmit={handleSubmit}>
      <button className={styles.iconAddTodo} type='submit' disabled={!title}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <input
        className={styles.newListInput}
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
