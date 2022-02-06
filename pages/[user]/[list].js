import Head from "next/head";
import {useRouter} from "next/router";
import {useState, useEffect, useCallback} from "react";
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
  const {user, list} = router.query;
  const [todoList, setTodoList] = useState([]);
  const db = getFirestore(firebaseApp);
  const docRef = doc(db, user, list);
  const fetchUserList = useCallback(async () => {
    try {
      const docSnap = await getDoc(docRef);
      const list = docSnap.data().todos;
      setTodoList(list);
    } catch (err) {
      console.error(err.name, err.message);
    }
  }, [docRef]);

  useEffect(() => fetchUserList(), [fetchUserList]);

  const handleAddTodo = async (newTodo) => {
    for (let item of todoList) {
      if (item.todo.toLowerCase() === newTodo.toLowerCase()) {
        alert(`You already have a todo named ${item.todo}. Try again.`);
        return;
      }
    }
    try {
      await updateDoc(docRef, {
        todos: arrayUnion({timeStamp: Date.now(), todo: newTodo}),
      });
      // console.log(`${newTodo} added to: ${docRef.id}`);
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

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Sidebar userId={user} listTitle={list} />
      <ListPane>
        <h3>ListPane</h3>
        <h4>{list}</h4>
        <TodoList list={todoList} onRemoveTodo={handleRemoveTodo} />
        <AddTodoForm onAddTodo={handleAddTodo} />
      </ListPane>
    </>
  );
};

export default List;
