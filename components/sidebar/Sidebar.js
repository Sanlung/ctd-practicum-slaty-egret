import {useState, useEffect, useCallback} from "react";
import {useRouter} from "next/router";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import {firebaseApp} from "../../config/firebaseConfig";
import SearchTodos from "./SearchTodos";
import TodoListsNav from "./TodoListsNav";
import AddTodoListForm from "./AddTodoListForm";

const Sidebar = ({userId, listTitle}) => {
  const router = useRouter();
  const [todoLists, setTodoLists] = useState([]);
  const db = getFirestore(firebaseApp);
  const colRef = collection(db, userId);

  const fetchUserData = useCallback(async () => {
    try {
      const querySnapShot = await getDocs(colRef);
      const lists = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodoLists(lists);
    } catch (err) {
      console.error(err.name, err.message);
    }
  }, [colRef]);

  useEffect(() => fetchUserData(), [fetchUserData]);

  const handleAddList = async (newTitle) => {
    for (let list of todoLists) {
      if (list.id.toLowerCase() === newTitle.toLowerCase()) {
        alert(`You already have a todo list named ${list.id}. Try again.`);
        return;
      }
    }
    try {
      const docRef = doc(db, userId, newTitle);
      await setDoc(docRef, {todos: []});
    } catch (err) {
      console.error(err.name, err.message);
    }
  };

  const handleRemoveList = async (listName) => {
    try {
      const docRef = doc(db, userId, listName);
      await deleteDoc(docRef);
      if (listTitle === listName) router.push(`/${userId}`);
    } catch (err) {
      console.error(err.name, err.message);
    }
  };

  return (
    <aside>
      <h3>Sidebar</h3>
      <SearchTodos />
      <TodoListsNav
        userId={userId}
        lists={todoLists}
        onRemoveList={handleRemoveList}
      />
      <AddTodoListForm onAddTodoList={handleAddList} />
    </aside>
  );
};

export default Sidebar;
