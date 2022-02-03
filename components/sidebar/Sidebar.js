import SearchTodos from "./SearchTodos";
import TodoListsNav from "./TodoListsNav";
import AddNewEntryForm from "../AddNewEntryForm";

const Sidebar = () => (
  <aside>
    <SearchTodos />
    <TodoListsNav />
    <AddNewEntryForm />
  </aside>
);

export default Sidebar;
