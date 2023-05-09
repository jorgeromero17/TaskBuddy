import React from 'react'
import './TodoItem.css'

function TodoItem(props) {
    return (
      <li className="TodoItem">
      <span className={`Icon Icon-check`} onClick={props.onComplete}>
        { props.completed ? <i className="fa-solid fa-circle-check Icon-check--active"></i> : <i className="fa-regular fa-circle"></i> }
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <i className="fa-solid fa-circle-xmark"></i>
      </span>
    </li>
    );
  }

export { TodoItem }