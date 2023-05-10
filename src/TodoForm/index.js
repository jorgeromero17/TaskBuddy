import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const {addTodo,setOpenModal,} = React.useContext(TodoContext);
    const [newTodoValue,setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
      event.preventDefault();
      if(newTodoValue.length>1){
        addTodo(newTodoValue);
        setOpenModal(false);
      }
    }

    const onCancel = (event) => {
      setOpenModal(false);
    }

    const onChange = (event) => {
      setNewTodoValue(event.target.value);
    }

    return(
      <form className="TodoFormMobile" onSubmit={onSubmit}>
        <label >Add a new task</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Learn to read minds"
        />
        <div className="TodoForm-buttonContainer">
          <button type="button" className="TodoForm-button Todoform-button-cancel" onClick={onCancel}>Cancel</button>
          <button type="submit" className="TodoForm-button Todoform-button-add">Add</button>
        </div>
      </form>
    )
}

export { TodoForm };