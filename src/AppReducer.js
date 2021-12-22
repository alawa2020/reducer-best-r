import React, { useEffect, useReducer, useState } from 'react';
import TodosScreen from './components/todos/TodosScreen';
import NavBar from './components/ui/NavBar';
import TodoContext from './contexts/TodoContext';

import todoReducer from './reducers/todoReducer';
import AppRouter from './routers/AppRouter';

const AppReducer = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem('list-todos-best')) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [editionMode, setEditionMode] = useState({
    id: '',
    state: false,
    todo: '',
  });

  useEffect(() => {
    localStorage.setItem('list-todos-best', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <TodoContext.Provider
        value={{ todos, dispatch, editionMode, setEditionMode }}
      >
        <AppRouter />
      </TodoContext.Provider>
    </div>
  );
};

export default AppReducer;
