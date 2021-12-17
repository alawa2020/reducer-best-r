import React, { useEffect, useReducer } from 'react';
import Form from './components/Form';
import ListTodos from './components/ListTodos';
import TodoContext from './contexts/TodoContext';

import todoReducer from './reducers/todoReducer';

const AppReducer = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem('list-todos-best')) || [];
  };
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem('list-todos-best', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <h1>AppReducer! </h1>
        <hr />
        <div className="row">
          <div className="col-9">
            <ListTodos />
          </div>
          <div className="col-3">
            <Form />
          </div>
        </div>
      </TodoContext.Provider>
    </div>
  );
};

export default AppReducer;
