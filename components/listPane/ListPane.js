import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faSortUp,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import firebaseApp from "../../config/firebaseConfig";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import styles from "../../styles/Loggedin.module.css";

library.add(faSortDown, faSortUp, faArrowLeft);

const ListPane = ({
  userId,
  todoList,
  isDisabled,
  onFetchData,
  onSortTodos,
  onRestoreLists,
}) => {
  const db = getFirestore(firebaseApp);
  const docRef = doc(db, userId, todoList.id);

  const addTodo = async (newTodo) => {
    for (let i = 0; i < todoList.todos.length; i++) {
      if (todoList.todos[i].todo.toLowerCase() === newTodo.toLowerCase()) {
        alert(
          `You already have '${todoList.todos[i].todo}' in this list. Try again.`
        );
        return;
      }
    }
    try {
      await updateDoc(docRef, {
        todos: arrayUnion({timeStamp: Date.now(), todo: newTodo}),
      });
      console.log(`'${newTodo}' added to the '${docRef.id}' list.`);
      onFetchData();
    } catch (err) {
      console.error(err.name, err.message);
    }
  };

  const removeTodo = async (item) => {
    try {
      await updateDoc(docRef, {
        todos: arrayRemove(item),
      });
      console.log(`'${item.todo}' removed from the '${docRef.id}' list.`);
      onFetchData();
    } catch (err) {
      console.error(err.name, err.message);
    }
  };

  const handleSort = () => onSortTodos();

  return (
    <div className={styles.maincontent}>
      {todoList.id === "Search Result" && (
        <button
          className={`${styles.iconAddTodo} ${styles.restoreButton}`}
          type='button'
          onClick={onRestoreLists}>
          <FontAwesomeIcon icon={faArrowLeft} /> Next
        </button>
      )}
      {todoList.id === "Login" ? (
        <p>Loading ...</p>
      ) : todoList.id === "Welcome" ? (
        <>
          <h2>{todoList.id}</h2>
          <p>
            Let&apos;s get started by creating a new list and add todos to the
            list or creating other lists.
          </p>
        </>
      ) : todoList.todos.length !== 0 ? (
        <>
          <h2>
            {todoList.id}
            <span className={styles.spanClickable} onClick={handleSort}>
              {todoList.isReverse ? (
                <FontAwesomeIcon icon={faSortUp} />
              ) : (
                <FontAwesomeIcon icon={faSortDown} />
              )}
            </span>
          </h2>
          <TodoList
            list={todoList.todos}
            isDisabled={isDisabled}
            onRemoveTodo={removeTodo}
          />
        </>
      ) : todoList.id === "Search Result" ? (
        <>
          <h2>{todoList.id}</h2>
          <p>No matching list item.</p>
        </>
      ) : (
        <>
          <h2>{todoList.id}</h2>
          <p>Add an item to the list.</p>
        </>
      )}
      <AddTodoForm
        isDisabled={isDisabled || todoList.id === "Welcome"}
        onAddTodo={addTodo}
      />
    </div>
  );
};

export default ListPane;
