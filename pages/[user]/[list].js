import Head from "next/head";
import {useRouter} from "next/router";
import {useState, useEffect, useCallback} from "react";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import {firebaseApp} from "../../config/firebaseConfig";
import {siteTitle} from "../../components/Layout";
import ListPane from "../../components/listPane/ListPane";
import Sidebar from "../../components/sidebar/Sidebar";
import TodoList from "../../components/listPane/TodoList";
import AddNewEntryForm from "../../components/AddNewEntryForm";

const List = () => {
  const router = useRouter();
  const {user, list} = router.query;
  const [todoList, setTodoList] = useState([]);
  const db = getFirestore(firebaseApp);
  const docRef = doc(db, user, list);
  const fetchUserList = useCallback(async () => {
    const docSnap = await getDoc(docRef);
    const list = docSnap.data().todos;
    setTodoList(list);
    // console.log(todoList);
  }, [docRef]);

  useEffect(() => fetchUserList(), [fetchUserList]);

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Sidebar userId={user} />
      <ListPane>
        <h3>ListPane</h3>
        <TodoList list={todoList} />
        <AddNewEntryForm>Add Todo</AddNewEntryForm>
      </ListPane>
    </>
  );
};

export default List;
