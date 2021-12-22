import React, { useContext } from 'react';
import TodoContext from '../../contexts/TodoContext';
import ListTodosItem from './ListTodosItem';
import Title from './Title';

const ListTodos = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <Title todos={todos} />
      <hr />
      {!todos.length ? (
        <p className="animate__animated animate__fadeIn">
          Your Todo List is empty!
        </p>
      ) : (
        <div className="table-x animate__animated animate__fadeIn">
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
      )}
    </div>
  );
};

export default ListTodos;
