import {useState} from "react";

const AddTodoListForm = ({onAddTodoList}) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodoList(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit' disabled={!title}>
        ✚
      </button>
      <input
        name='addList'
        type='text'
        value={title}
        placeholder='New List'
        onChange={handleTitleChange}
      />
    </form>
  );
};

export default AddTodoListForm;
