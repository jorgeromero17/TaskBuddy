import React from 'react'
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const {completedTodos,totalTodos} = React.useContext(TodoContext);

  const progressPercent = totalTodos > 0 ? Math.round(completedTodos / totalTodos * 100) : 0;

  return (
    <>
    <div className="TodoCounter">
      <span>You have completed</span>
      <span>{completedTodos} / {totalTodos} Tasks</span>
      <div className="bar">
        <div className="progress" style={{width: `${progressPercent}%`}}></div>
      </div>

    </div>
    </>
  )
}

export { TodoCounter };