import TodoListsNavItem from "./TodoListsNavItem";

const TodoListsNav = ({todoLists, onDisplayList, onRemoveList}) => (
  <>
    <ul>
      {todoLists.map((list) => (
        <TodoListsNavItem
          key={list.id}
          listName={list.id}
          listCount={list.todos.length}
          onDisplayList={onDisplayList}
          onRemoveList={onRemoveList}
        />
      ))}
    </ul>
  </>
);

export default TodoListsNav;
