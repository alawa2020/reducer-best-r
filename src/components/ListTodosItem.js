import React from 'react';

const ListTodosItem = ({ todo, id, done, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <span className={`${done && 'complete'}`}>{todo} </span>
      </td>
      <td>{id}</td>
      <td>
        {done ? <span>✔️</span> : <span>❌</span>}{' '}
        <button className="btn btn-outline-info" type="button">
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
