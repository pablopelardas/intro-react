import React from 'react';
import { useLocalStorage } from './useLocalStorage.js';

const TodoContext =  React.createContext();

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  (!searchValue.length >= 1)? searchedTodos= todos : searchedTodos = todos.filter(todo => todo.text.toLowerCase().match(`.?${searchValue.toLowerCase()}.?`));
    // let regex = new RegExp(`.?${searchValue.toLowerCase()}.?`,'g');
    // console.log(regex);


    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        completed: false,
        text,
      });
      saveTodos(newTodos);
    }
  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    // const todoIndex = todos.findIndex(todo => todo.text === text);
    // const newTodos = [...todos];
    // newTodos.splice(todoIndex, 1);
    const newTodos = todos.filter(todo => todo.text !== text);
    saveTodos(newTodos);
  }
//Ejecuta el código que le envíemos por dentro justo antes de renderizar nuestro código
  React.useEffect(() => {
    //Como le damos condiciones para que se ejecute unicamente cuando especifiquemos una condicion



    //Vamos a escuchar desde nuestro useEffect cada vez que haya un cambio en totalTodos. Podemos ejecutar este codigo solamente cuando haya cambios en las variables y componentes que pongamos aca.
  }, [totalTodos]);

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };