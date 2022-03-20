import Head from "next/head";
import {useState, useEffect, useCallback} from "react";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import {firebaseApp} from "../../config/firebaseConfig";
import {useAuth} from "../../context/AuthUserContext";
import Layout, {siteTitle} from "../../components/Layout";
import Sidebar from "../../components/sidebar/Sidebar";
import ListPane from "../../components/listPane/ListPane";
import styles from "../../styles/Loggedin.module.css";
import {connectAuthEmulator} from "firebase/auth";

const User = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [todoList, setTodoList] = useState({
    id: "Login",
    todos: [],
    isReverse: false,
  });
  const [backupLists, setBackupLists] = useState([]);
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
            setTodoLists(lists);
            setBackupLists(JSON.parse(JSON.stringify(lists)));
            if (newTitle) {
              setTodoList({
                id: newTitle,
                todos: [],
                isReverse: false,
              });
            } else {
              const activeList = JSON.parse(
                JSON.stringify(lists.filter((el) => el.id === todoList.id))
              );
              activeList.length
                ? setTodoList({
                    id: activeList[0].id,
                    todos: activeList[0].todos,
                    isReverse: false,
                  })
                : setTodoList({
                    id: lists[0].id,
                    todos: JSON.parse(JSON.stringify(lists[0].todos)),
                    isReverse: false,
                  });
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
    if (todoList.id !== listName) {
      for (let i = 0; i < backupLists.length; i++) {
        if (backupLists[i].id === listName) {
          if (todoList.id.includes("Search: ")) {
            setTodoLists(JSON.parse(JSON.stringify(backupLists)));
          }
          setTodoList(JSON.parse(JSON.stringify(backupLists[i])));
          console.log(todoList);
          break;
        }
      }
    }
  };

  const searchTodos = (searchTerm) => {
    const listHits = backupLists.filter((list) =>
      list.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const itemHits = {
      id: `Search: ${searchTerm}`,
      todos: [],
      isReverse: false,
    };
    for (let i = 0; i < backupLists.length; i++) {
      let todos = backupLists[i].todos;
      for (let j = 0; j < todos.length; j++) {
        if (todos[j].todo.toLowerCase().includes(searchTerm.toLowerCase()))
          itemHits.todos.push(todos[j]);
      }
    }
    setTodoLists(listHits);
    setTodoList(itemHits);
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
          backupLists={backupLists}
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
