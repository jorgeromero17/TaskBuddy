import React from 'react'
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal,openModal}) {

  return (
    <button className="CreateTodoButton" 
    onClick={ () =>{
      setOpenModal(state => !state);
    }}>
    {openModal ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-plus"></i> }
    </button>
  );
}

export { CreateTodoButton };