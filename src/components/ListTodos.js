import React, { useContext } from 'react';
import TodoContext from '../contexts/TodoContext';
import ListTodosItem from './ListTodosItem';

const ListTodos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <div>
      <h2>List Todos</h2>
      <hr />
      <div className="table-x">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Todo</th>
              <th scope="col">Id</th>
              <th scope="col">Done</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <ListTodosItem key={todo.id} {...todo} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodos;
