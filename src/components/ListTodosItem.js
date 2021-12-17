import React, { useContext } from 'react';
import TodoContext from '../contexts/TodoContext';

const ListTodosItem = ({ todo, id, done, index }) => {
  const { dispatch } = useContext(TodoContext);

  const toggleChange = () => {
    dispatch({
      type: 'toggle',
      payload: id,
    });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <span className={`${done && 'complete'}`}>{todo} </span>
      </td>
      <td>{id}</td>
      <td>
        {done ? <span>✔️</span> : <span>❌</span>}{' '}
        <button
          onClick={toggleChange}
          className="btn btn-outline-info"
          type="button"
        >
          Change
        </button>
      </td>

      <td>
        <button className="btn btn-outline-warning mr-2" type="button">
          Edit
        </button>
        <button className="btn btn-outline-danger" type="button">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListTodosItem;
