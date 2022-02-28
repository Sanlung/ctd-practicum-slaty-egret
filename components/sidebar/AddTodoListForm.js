import {useState} from "react";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Loggedin.module.css";

library.add(faPlus);
const AddTodoListForm = ({isDisabled, onAddTodoList}) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodoList(title);
    setTitle("");
  };

  return (
    <form className={styles.newListForm} onSubmit={handleSubmit}>
      <button
        className={styles.iconAddTodo}
        type='submit'
        disabled={isDisabled || !title}>
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
