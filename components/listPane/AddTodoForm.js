import {useState} from "react";

const AddTodoForm = ({isDisabled, onAddTodo}) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit' disabled={isDisabled || !title}>
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
