import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import firebaseApp from "../../config/firebaseConfig";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

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
    <div>
      <h3>ListPane</h3>
      {todoList.id === "Search Result" && (
        <button type='button' onClick={onRestoreLists}>
          ←
        </button>
      )}
      {todoList.id === "Login" ? (
        <p>Loading ...</p>
      ) : todoList.id === "Welcome" ? (
        <p>
          Let's get started by creating a new list and add todos to the list or
          creating other lists.
        </p>
      ) : todoList.todos.length !== 0 ? (
        <>
          <h4>
            {todoList.id}{" "}
            <button onClick={handleSort}>
              {todoList.isReverse ? <>⌃</> : <>⌵</>}
            </button>
          </h4>
          <TodoList
            list={todoList.todos}
            isDisabled={isDisabled}
            onRemoveTodo={removeTodo}
          />
        </>
      ) : todoList.id === "Search Result" ? (
        <>
          <h4>{todoList.id}</h4>
          <p>No matching list item.</p>
        </>
      ) : (
        <>
          <h4>{todoList.id}</h4>
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
