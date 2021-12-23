import React from 'react';
import Form from './Form';
import ListTodos from './ListTodos';

const TodosScreen = () => {
  return (
    <div>
      <Form />
      <hr />
      <ListTodos />
    </div>
  );
};

export default TodosScreen;
