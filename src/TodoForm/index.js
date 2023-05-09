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
      }else{
        
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
        <label className="TodoFormMobile-label">Escribe una nueva tarea</label>
        <textarea className='TodoForm-textareaMobile'
          value={newTodoValue}
          onChange={onChange}
          placeholder="Estudiar Matemáticas"
        />
        <div className="TodoForm-buttonContainer">
          <button type="button" className="TodoForm-button Todoform-button-cancel" onClick={onCancel}>Cancelar</button>
          <button type="submit" className="TodoForm-button Todoform-button-add">Añadir</button>
        </div>
      </form>
    )
}

export { TodoForm };