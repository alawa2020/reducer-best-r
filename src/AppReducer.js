import React from 'react';
import Form from './components/Form';
import ListTodos from './components/ListTodos';

const AppReducer = () => {
  return (
    <div>
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
    </div>
  );
};

export default AppReducer;
