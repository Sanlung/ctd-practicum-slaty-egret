import {getFirestore, doc, setDoc, deleteDoc} from "firebase/firestore";
import {firebaseApp} from "../../config/firebaseConfig";
import SearchTodos from "./SearchTodos";
import TodoListsNav from "./TodoListsNav";
import AddTodoListForm from "./AddTodoListForm";

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
    <aside>
      <h3>Sidebar</h3>
      <p>
        <span>👤</span>&nbsp;{userName}
      </p>
      <SearchTodos isDisabled={isDisabled} onSearchTodos={onSearchTodos} />
      {todoLists.length !== 0 ? (
        <TodoListsNav
          todoLists={todoLists}
          onDisplayList={onDisplayList}
          onRemoveList={removeList}
        />
      ) : isDisabled ? (
        <p>No matching list title.</p>
      ) : todoList.id === "Login" ? (
        <p>Loading ...</p>
      ) : (
        <p>Create a new todo list.</p>
      )}
      <AddTodoListForm isDisabled={isDisabled} onAddTodoList={addTodoList} />
    </aside>
  );
};

export default Sidebar;
