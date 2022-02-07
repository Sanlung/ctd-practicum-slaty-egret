import {useState} from "react";

const AddTodoForm = ({onAddTodo}) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit' disabled={!title}>
        ✚
      </button>
      <input
        name='addTodo'
        type='text'
        value={title}
        placeholder='Add Todo'
        onChange={handleTitleChange}
      />
    </form>
  );
};

export default AddTodoForm;
