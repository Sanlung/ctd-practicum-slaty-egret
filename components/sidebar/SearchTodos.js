import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import style from "../../styles/Loggedin.module.css";

library.add(faSearch);
const SearchTodos = ({isDisabled, onSearchTodos}) => {
  const [title, setTitle] = useState();

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchTodos(title);
    setTitle("");
  };

  return (
    <form className={style.searchTodo} onSubmit={handleSearch}>
      <button
        className={style.iconAddTodo}
        type='submit'
        disabled={isDisabled || !title}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        className={style.search}
        type='text'
        value={title}
        placeholder='Search'
        onChange={handleTitleChange}
      />
    </form>
  );
};

export default SearchTodos;
