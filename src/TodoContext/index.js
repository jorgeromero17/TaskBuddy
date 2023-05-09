import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({children}) {

  const {item:todos,saveItem:saveTodos, loading, error} = useLocalStorage('todos_v1',[]);

  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter( todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter( todo => todo.text.toLowerCase().includes(searchValue) );

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed:false
    })
    saveTodos(newTodos);
  } 

  const completedTodo = (text) => {
      const newTodos = [...todos];
      const index = newTodos.findIndex( todo => todo.text === text);
      newTodos[index].completed = !newTodos[index].completed;
      saveTodos(newTodos);
  };

  const deletedTodo = (text) => {
      const newTodos = [...todos];
      const index = newTodos.findIndex( todo => todo.text === text);
      newTodos.splice(index,1);
      saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
        completedTodos,
        totalTodos,
        searchedTodos,
        searchValue,
        setSearchValue,
        completedTodo,
        deletedTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
        }}>
        {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };

/*const defaultTodos = [
  {text:'Cortar cebolla',completed: true},
  {text:'Tomar awita',completed: true},
  {text:'Completar el curso de React',completed: false},
  {text:'Ser feliz',completed: false},
]*/

//localStorage.setItem('todos_v1',defaultTodos)
//localStorage.removeItem('todos_v1')