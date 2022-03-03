import {getFirestore, doc, setDoc, deleteDoc} from "firebase/firestore";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {firebaseApp} from "../../config/firebaseConfig";
import SearchTodos from "./SearchTodos";
import TodoListsNav from "./TodoListsNav";
import AddTodoListForm from "./AddTodoListForm";
import styles from "../../styles/Loggedin.module.css";

const Sidebar = ({
  userId,
  userName,
  todoList,
  todoLists,
  isDisabled,
  onFetchData,
  onSearchTodos,
  onDisplayList,
}) => {
  const db = getFirestore(firebaseApp);

  const addTodoList = async (newTitle) => {
    for (let i = 0; i < todoLists.length; i++) {
      if (todoLists[i].id.toLowerCase() === newTitle.toLowerCase()) {
        alert(`You already have a list named '${newTitle}'. Try again.`);
        return;
      }
    }
    try {
      const docRef = doc(db, userId, newTitle);
      await setDoc(docRef, {todos: []});
      console.log(`'${docRef.id}' added to account '${userId}'`);
      onFetchData(docRef.id);
    } catch (err) {
      console.error(err.name, err.message);
    }
  };

  const removeList = async (listName) => {
    try {
      const docRef = doc(db, userId, listName);
      await deleteDoc(docRef);
      console.log(`'${docRef.id}' deleted from account '${userId}'`);
      onFetchData();
    } catch (err) {
      console.error(err.name, err.message);
    }
  };

  return (
    <aside className={styles.sidebar}>
      <p className={styles.userInfo}>
        <span>
          <FontAwesomeIcon icon={faCircleUser} />
        </span>
        <span>{userName}</span>
      </p>
      <SearchTodos isDisabled={isDisabled} onSearchTodos={onSearchTodos} />
      {todoLists.length !== 0 ? (
        <TodoListsNav
          todoLists={todoLists}
          onDisplayList={onDisplayList}
          onRemoveList={removeList}
        />
      ) : isDisabled ? (
        <div className={styles.sidebarMsg}>No matching list title.</div>
      ) : todoList.id === "Login" ? (
        <div className={styles.sidebarMsg}>Loading ...</div>
      ) : (
        <div className={styles.sidebarMsg}>Create a new todo list.</div>
      )}
      <AddTodoListForm isDisabled={isDisabled} onAddTodoList={addTodoList} />
    </aside>
  );
};

export default Sidebar;
