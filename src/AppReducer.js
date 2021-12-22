import React, { useEffect, useReducer, useState } from 'react';
import authReducer from './auth/authReducer';
import TodosScreen from './components/todos/TodosScreen';
import NavBar from './components/ui/NavBar';
import TodoContext from './contexts/TodoContext';

import todoReducer from './reducers/todoReducer';
import AppRouter from './routers/AppRouter';

const AppReducer = () => {
  // useReducer of Todos
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

  // userReducer of auth
  const initAuth = () => {
    return localStorage.getItem('user-auth-todos') || { logged: false };
  };
  const [userAuth, dispatchAuth] = useReducer(authReducer, {}, initAuth);

  useEffect(() => {
    localStorage.setItem('user-auth-todos', JSON.stringify(userAuth));
  }, [userAuth]);

  return (
    <div>
      <TodoContext.Provider
        value={{
          todos,
          dispatch,
          editionMode,
          setEditionMode,
          userAuth,
          dispatchAuth,
        }}
      >
        <AppRouter />
      </TodoContext.Provider>
    </div>
  );
};

export default AppReducer;
