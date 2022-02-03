import {useState, useEffect} from "react";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import {firebaseApp} from "../../config/firebaseConfig";
import SearchTodos from "./SearchTodos";
import TodoListsNav from "./TodoListsNav";
import AddNewEntryForm from "../AddNewEntryForm";

const Sidebar = ({userId}) => {
  const [todoLists, setTodoLists] = useState([]);
  const db = getFirestore(firebaseApp);
  const colRef = collection(db, "user1AuthId");
  const fetchUserData = async () => {
    const querySnapShot = await getDocs(colRef);
    const lists = querySnapShot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTodoLists(lists);
    console.log(todoLists);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <aside>
      <SearchTodos />
      <TodoListsNav />
      <AddNewEntryForm />
    </aside>
  );
};

export default Sidebar;
