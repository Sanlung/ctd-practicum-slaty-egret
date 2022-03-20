import {getFirestore, doc, setDoc, deleteDoc} from "firebase/firestore";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {firebaseApp} from "../../config/firebaseConfig";
import SearchTodos from "./SearchTodos";
import TodoListsNav from "./TodoListsNav";
import AddTodoListForm from "./AddTodoListForm";
import styles from "../../styles/Loggedin.module.css";

const Sidebar = ({
  user,
  todoList,
  todoLists,
  backupLists,
  onFetchData,
  onSearchTodos,
  onDisplayList,
}) => {
  const db = getFirestore(firebaseApp);

  const addTodoList = async (newTitle) => {
    for (let i = 0; i < backupLists.length; i++) {
      if (backupLists[i].id.toLowerCase() === newTitle.toLowerCase()) {
        alert(
          `You already have a list named '${activeLists[i].id}'. Try again.`
        );
        return;
      }
    }
    try {
      const docRef = doc(db, user.uid, newTitle);
      await setDoc(docRef, {todos: []});
      console.log(`'${docRef.id}' added to account '${user.uid}'`);
      onFetchData(docRef.id);
    } catch (err) {
      console.error(err.name, err.message);
    }
  };

  const removeList = async (listName) => {
    try {
      const docRef = doc(db, user.uid, listName);
      await deleteDoc(docRef);
      console.log(`'${docRef.id}' deleted from account '${user.uid}'`);
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
        <span>{user ? user.email.match(/^([^@]*)@/)[1] : " "}</span>
      </p>
      <SearchTodos onSearchTodos={onSearchTodos} />
      {todoLists.length !== 0 ? (
        <TodoListsNav
          todoLists={todoLists}
          onDisplayList={onDisplayList}
          onRemoveList={removeList}
        />
      ) : todoList.id === "Login" ? (
        <div className={styles.sidebarMsg}>Loading ...</div>
      ) : todoList.id === "Welcome" ? (
        <div className={styles.sidebarMsg}>Create a new list here.</div>
      ) : (
        <div className={styles.sidebarMsg}>No matching list title.</div>
      )}
      <AddTodoListForm onAddTodoList={addTodoList} />
    </aside>
  );
};

export default Sidebar;
