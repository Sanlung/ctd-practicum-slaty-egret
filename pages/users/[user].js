import Head from "next/head";
import {useRef, useState, useEffect, useCallback} from "react";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import {firebaseApp} from "../../config/firebaseConfig";
import {useAuth} from "../../context/AuthUserContext";
import Layout, {siteTitle} from "../../components/Layout";
import Sidebar from "../../components/sidebar/Sidebar";
import ListPane from "../../components/listPane/ListPane";
import styles from "../../styles/Loggedin.module.css";
import {connectAuthEmulator} from "firebase/auth";

const User = () => {
  const listsRef = useRef([]);
  const listRef = useRef({
    id: "Login",
    todos: [],
    isReverse: false,
  });
  const [todoLists, setTodoLists] = useState(listsRef.current);
  const [todoList, setTodoList] = useState(listRef.current);
  const db = getFirestore(firebaseApp);
  const {authUser} = useAuth();

  const fetchUserData = useCallback(
    async (newTitle) => {
      if (authUser) {
        try {
          const querySnapshot = await getDocs(collection(db, authUser.uid));
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
            listsRef.current = lists;
            setTodoLists(listsRef.current);
            if (newTitle) {
              setTodoList({
                id: newTitle,
                todos: [],
                isReverse: false,
              });
            } else {
              const activeList = lists.filter(
                (el) => el.id === listRef.current.id
              );
              if (activeList.length) {
                listRef.current = {
                  id: activeList[0].id,
                  todos: activeList[0].todos,
                  isReverse: false,
                };
                setTodoList(listRef.current);
              } else {
                listRef.current = {
                  id: lists[0].id,
                  todos: lists[0].todos,
                  isReverse: false,
                };
                setTodoList(listRef.current);
              }
            }
          }
        } catch (err) {
          console.error(err.name, err.message);
        }
      }
    },
    [authUser]
  );

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const displayList = (listName) => {
    if (listRef.current.id !== listName) {
      for (let i = 0; i < listsRef.current.length; i++) {
        if (listsRef.current[i].id === listName) {
          if (listRef.current.id.includes("Search: ")) {
            setTodoLists(listsRef.current);
          }
          listRef.current = listsRef.current[i];
          setTodoList(listRef.current);
          return;
        }
      }
    }
  };

  const searchTodos = (searchTerm) => {
    const listHits = listsRef.current.filter((list) =>
      list.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const itemHits = {
      id: `Search: ${searchTerm}`,
      todos: [],
      isReverse: false,
    };
    for (let i = 0; i < listsRef.current.length; i++) {
      let todos = listsRef.current[i].todos;
      for (let j = 0; j < todos.length; j++) {
        if (todos[j].todo.toLowerCase().includes(searchTerm.toLowerCase()))
          itemHits.todos.push(todos[j]);
      }
    }
    setTodoLists(listHits);
    listRef.current = itemHits;
    setTodoList(listRef.current);
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
          user={authUser}
          todoList={todoList}
          todoLists={todoLists}
          listsRef={listsRef}
          onFetchData={fetchUserData}
          onSearchTodos={searchTodos}
          onDisplayList={displayList}
        />
        <ListPane
          user={authUser}
          todoList={todoList}
          onFetchData={fetchUserData}
          onSortTodos={sortTodos}
        />
      </div>
    </Layout>
  );
};

export default User;
