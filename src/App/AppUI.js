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

function AppUI() {

  const {searchedTodos,completedTodo,deletedTodo,loading,error,openModal,setOpenModal} = React.useContext(TodoContext);

    return(
    <>
      <TodoCounter />
      <TodoSearch />
          <TodoList>
            {loading && <Loading/>}
            {error && <Error/>}
            {(!loading && searchedTodos.length === 0) && <Invitation />}

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
    </>
    );
          
}

export { AppUI };