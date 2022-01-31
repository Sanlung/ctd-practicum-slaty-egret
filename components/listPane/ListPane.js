import TodoList from "./TodoList";
// import AddNewEntryForm from "./AddNewEntryForm";
import React, { useEffect, useState } from "react";

function useSemiPersistentState () {
    const [list, setList] = useState (JSON.parse(localStorage.getItem('savedList')));
    useEffect(() => {
        localStorage.setItem('savedList', JSON.stringify(list));
    }, [list]);
    return(
        [list, setList]
    )
};

const ListPane = () => {

    const [list, setList] = useSemiPersistentState();
    
    const addItem = (newItem) => {
        setList([...list, newItem])
    }
    return(

  <>

    <TodoList list={list}/>
    {/* <AddNewEntryForm onAddItem={addItem}  /> */}
  </>
    )
};

export default ListPane;
