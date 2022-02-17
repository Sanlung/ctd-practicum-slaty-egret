import Head from "next/head";
import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import {firebaseApp} from "../../config/firebaseConfig";
import {siteTitle} from "../../components/Layout";
import Sidebar from "../../components/sidebar/Sidebar";
import ListPane from "../../components/listPane/ListPane";
import TodoList from "../../components/listPane/TodoList";
import AddTodoForm from "../../components/listPane/AddTodoForm";

const List = () => {
  const router = useRouter();
  const {user, list, search} = router.query;
  const [todoList, setTodoList] = useState({
    todos: [],
    isEmpty: true,
    isReverse: false,
  });
  const db = getFirestore(firebaseApp);
  const docRef = doc(db, user, list);
  const fetchUserList = async () => {
    try {
      const docSnap = await getDoc(docRef);
      const todos = docSnap.data().todos;
      setTodoList({
        todos: todos,
        isEmpty: todos.length === 0,
        isReverse: false,
      });
    } catch (err) {
      console.error(err.name, err.message);
    }
  };

  useEffect(() => fetchUserList(), []);

  const handleAddTodo = async (newTodo) => {
    for (let i = 0; i < todoList.todos.length; i++) {
      if (todoList.todos[i].todo.toLowerCase() === newTodo.toLowerCase()) {
        alert(
          `You already have '${todoList.todos[i].todo}' in your todos. Try again.`
        );
        return;
      }
    }
    try {
      await updateDoc(docRef, {
        todos: arrayUnion({timeStamp: Date.now(), todo: newTodo}),
      });
      // console.log(`'${newTodo}' added to: ${docRef.id}`);
    } catch (err) {
      console.error(err.name, err.message);
    }
  };

  const handleRemoveTodo = async (item) => {
    try {
      await updateDoc(docRef, {
        todos: arrayRemove(item),
      });
    } catch (err) {
      console.error(err.name, err.message);
    }
  };

  const sortTodos = () => {
    const list = todoList.isReverse
      ? todoList.todos.sort((a, b) => a.timeStamp - b.timeStamp)
      : todoList.todos.sort((a, b) => b.timeStamp - a.timeStamp);
    setTodoList({
      todos: list,
      isEmpty: list.length === 0,
      isReverse: !todoList.isReverse,
    });
  };

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Sidebar userId={user} listTitle={list} searchTerm={search} />
      <ListPane>
        <h3>ListPane</h3>
        <h4>
          {list}{" "}
          <span onClick={sortTodos}>
            {todoList.isReverse ? <>&#129087;</> : <>&#129085;</>}
          </span>
        </h4>
        {todoList.isEmpty ? (
          <p>Please add an item to the list &apos;{list}&apos;</p>
        ) : (
          <TodoList
            list={todoList.todos}
            searchTerm={search}
            onRemoveTodo={handleRemoveTodo}
          />
        )}
        <AddTodoForm onAddTodo={handleAddTodo} />
      </ListPane>
    </>
  );
};

export default List;
