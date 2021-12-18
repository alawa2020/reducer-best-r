import React, { useContext } from 'react';
import TodoContext from '../contexts/TodoContext';

const ListTodosItem = ({ todo, id, done, index }) => {
  const { dispatch, setEditionMode } = useContext(TodoContext);

  const toggleChange = () => {
    dispatch({
      type: 'toggle',
      payload: id,
    });
  };

  const deleteClick = () => {
    dispatch({
      type: 'delete',
      payload: id,
    });
  };

  const editClick = () => {
    setEditionMode({ id, state: true, todo });
  };

  return (
    <tr className="animate__animated animate__fadeIn">
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
        <button
          onClick={editClick}
          className="btn btn-outline-warning mr-2"
          type="button"
        >
          Edit
        </button>
        <button
          onClick={deleteClick}
          className="btn btn-outline-danger"
          type="button"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListTodosItem;
