import {useState, useEffect} from "react";
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

const Sidebar = ({userId, listTitle = null, searchTerm = null}) => {
  const router = useRouter();
  const [todoLists, setTodoLists] = useState([]);
  const db = getFirestore(firebaseApp);
  const colRef = collection(db, userId);

  const fetchUserData = async () => {
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
  };

  useEffect(() => fetchUserData(), []);

  const handleAddList = async (newTitle) => {
    for (let i = 0; i < todoLists.length; i++) {
      if (todoLists[i].id.toLowerCase() === newTitle.toLowerCase()) {
        alert(`You already have a todo list named ${list.id}. Try again.`);
        return;
      }
    }
    try {
      const docRef = doc(db, userId, newTitle);
      await setDoc(docRef, {todos: []});
      // console.log(`${newTitle} added to: account ${userID}`)
      router.push(`/${userId}/${newTitle}`);
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

  const handleSearchTodos = (term) => {
    for (let i = 0; i < todoLists.length; i++) {
      if (todoLists[i].id.toLowerCase().includes(term.toLowerCase())) {
        router.push({
          pathname: "/[user]/[list]",
          query: {
            user: userId,
            list: todoLists[i].id,
            search: term.toLowerCase(),
          },
        });
        return;
      }
    }
    for (let j = 0; j < todoLists.length; j++) {
      for (let k = 0; k < todoLists[j].todos.length; k++) {
        let todo = todoLists[j].todos[k].todo;
        if (todo.toLowerCase().includes(term.toLowerCase())) {
          router.push({
            pathname: "[user]/[list]",
            query: {
              user: userId,
              list: todoLists[j].id,
              search: term.toLowerCase(),
            },
          });
          return;
        }
      }
    }
  };

  return (
    <aside>
      <h3>Sidebar</h3>
      <SearchTodos onSearchTodos={handleSearchTodos} />
      <TodoListsNav
        userId={userId}
        lists={todoLists}
        searchTerm={searchTerm}
        onRemoveList={handleRemoveList}
      />
      <AddTodoListForm onAddTodoList={handleAddList} />
    </aside>
  );
};

export default Sidebar;
