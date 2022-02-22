import {useState} from "react";

const SearchTodos = ({isDisabled, onSearchTodos}) => {
  const [title, setTitle] = useState();

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchTodos(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSearch}>
      <button type='submit' disabled={isDisabled || !title}>
        &#128269;
      </button>
      <input
        type='text'
        value={title}
        placeholder='Search'
        onChange={handleTitleChange}
      />
    </form>
  );
};

export default SearchTodos;
