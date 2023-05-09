import React from 'react'
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const {completedTodos,totalTodos} = React.useContext(TodoContext);

  const progressPercent = Math.round(completedTodos / totalTodos * 100);

  return (
    <>
    <div className="TodoCounter">
      <span>Has completado</span>
      <span>{completedTodos} / {totalTodos} tareas</span>
      <div className="bar">
        <div className="progress" style={{width: `${progressPercent}%`}}></div>
      </div>

    </div>
    </>
  )
}

export { TodoCounter };