import Head from "next/head";
import {useRouter} from "next/router";
import {useState, useEffect, useCallback} from "react";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import {firebaseApp} from "../config/firebaseConfig";
import Layout, {siteTitle} from "../components/Layout";
import Sidebar from "../components/sidebar/Sidebar";
import ListPane from "../components/listPane/ListPane";
import styles from "../styles/Loggedin.module.css";

const User = () => {
  const router = useRouter();
  const {user, name} = router.query;
  const [todoLists, setTodoLists] = useState([]);
  const [todoList, setTodoList] = useState({
    id: "Login",
    todos: [],
    isReverse: false,
  });
  const [restoredLists, setRestoredLists] = useState([]);
  const [restoredList, setRestoredList] = useState({});
  const [isUpdateDisabled, setIsUpdateDisabled] = useState(false);
  const db = getFirestore(firebaseApp);
  const colRef = collection(db, user);

  const fetchUserData = async (newTitle) => {
    try {
      const querySnapshot = await getDocs(colRef);
      // console.log(querySnapshot);
      if (!querySnapshot.docs.length) {
        setTodoLists([]);
        setTodoList({
          id: "Welcome",
          todos: [],
          isReverse: false,
        });
      } else {
        const lists = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTodoLists(lists);
        if (newTitle) {
          setTodoList({
            id: newTitle,
            todos: [],
            isReverse: false,
          });
        } else {
          const listStatus = lists.filter((el) => el.id === todoList.id);
          listStatus.length
            ? setTodoList({
                id: listStatus[0].id,
                todos: listStatus[0].todos,
                isReverse: false,
              })
            : setTodoList({
                id: lists[0].id,
                todos: lists[0].todos,
                isReverse: false,
              });
        }
      }
    } catch (err) {
      console.error(err.name, err.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const displayList = (listName) => {
    for (let list of todoLists) {
      if (list.id === listName)
        setTodoList({
          id: list.id,
          todos: list.todos,
          isReverse: false,
        });
    }
  };

  const searchTodos = (searchTerm) => {
    setRestoredLists(todoLists);
    setRestoredList(todoList);
    const listHits = todoLists.filter((list) =>
      list.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const itemHits = {
      id: "Search Result",
      todos: [],
      isReverse: false,
    };
    for (let i = 0; i < todoLists.length; i++) {
      let todos = todoLists[i].todos;
      for (let j = 0; j < todos.length; j++) {
        if (todos[j].todo.toLowerCase().includes(searchTerm.toLowerCase()))
          itemHits.todos.push(todos[j]);
      }
    }
    setTodoLists(listHits);
    setTodoList(itemHits);
    setIsUpdateDisabled(true);
  };

  const restoreLists = () => {
    setTodoLists(restoredLists);
    setTodoList(restoredList);
    setIsUpdateDisabled(false);
  };

  const sortTodos = () => {
    todoList.isReverse
      ? todoList.todos.sort((a, b) => a.timeStamp - b.timeStamp)
      : todoList.todos.sort((a, b) => b.timeStamp - a.timeStamp);
    setTodoList({
      id: todoList.id,
      todos: todoList.todos,
      isReverse: !todoList.isReverse,
    });
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.container}>
        <Sidebar
          userId={user}
          userName={name}
          todoList={todoList}
          todoLists={todoLists}
          isDisabled={isUpdateDisabled}
          onFetchData={fetchUserData}
          onSearchTodos={searchTodos}
          onDisplayList={displayList}
        />
        <ListPane
          userId={user}
          todoList={todoList}
          isDisabled={isUpdateDisabled}
          onFetchData={fetchUserData}
          onSortTodos={sortTodos}
          onRestoreLists={restoreLists}
        />
      </div>
    </Layout>
  );
};

export default User;
