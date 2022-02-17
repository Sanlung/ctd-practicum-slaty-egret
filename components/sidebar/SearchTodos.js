import {useState} from "react";

const SearchTodos = ({onSearchTodos}) => {
  const [title, setTitle] = useState();

  const handleChange = (e) => setTitle(e.target.term.value);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchTodos(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSearch}>
      <button type='submit'>
        &#128269;
        {/* <FontAwesomeIcon icon={faMagnifier} /> */}
      </button>
      <input type='text' name='term' value={title} placeholder='Search' onChange={handleChange}/>
    </form>
  );
};

export default SearchTodos;
