import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Loggedin.module.css";

const AddTodoForm = ({isDisabled, onAddTodo}) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(title);
    setTitle("");
  };

  return (
    <form className={styles.newTaskForm} onSubmit={handleSubmit}>
      <button
        className={styles.iconAddTodo}
        type='submit'
        disabled={isDisabled || !title}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <input
        className={styles.newTaskInput}
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
