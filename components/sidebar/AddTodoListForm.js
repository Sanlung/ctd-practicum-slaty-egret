import {useState} from "react";

const AddTodoListForm = ({isDisabled, onAddTodoList}) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodoList(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit' disabled={isDisabled || !title}>
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
