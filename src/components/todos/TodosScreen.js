import React from 'react';
import Form from './Form';
import ListTodos from './ListTodos';

const TodosScreen = () => {
  return (
    <div>
      <div className="row">
        <div className="col-9">
          <ListTodos />
        </div>
        <div className="col-3">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default TodosScreen;
