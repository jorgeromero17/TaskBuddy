import React from 'react';
import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Loading } from '../Loading';
import { Error } from '../Error';
import { Invitation } from '../Invitation';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';
import { CreateTodo } from '../CreateTodo';
import './AppUI.css';

function AppUI() {

  const {searchedTodos,completedTodo,deletedTodo,loading,error,openModal,setOpenModal,multipleTodosExist} = React.useContext(TodoContext);

    return(
    <>
      <div className='containerCreateTodo'> 
        <CreateTodo/>
      </div>
      <div className='containerTodos'>
        <h1>TaskBuddy</h1>
        <TodoCounter />
        <TodoSearch />
            <TodoList >
              {loading && <Loading/>}
              {error && <Error/>}
              {(!loading && searchedTodos.length === 0) && <Invitation  multipleTodosExist={multipleTodosExist} />}

              {searchedTodos.map(todo => {
              return <TodoItem key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completedTodo(todo.text)}
                  onDelete={() => deletedTodo(todo.text)}
              />
              })}
          </TodoList>
          <CreateTodoButton
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
          {openModal && (<Modal>
            <TodoForm/>
          </Modal>)}
      </div>
    </>
    );
          
}

export { AppUI };