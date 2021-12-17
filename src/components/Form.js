import React, { useContext } from 'react';
import TodoContext from '../contexts/TodoContext';
import useForm from '../hooks/useForm';

const Form = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const [{ task }, handleChange, resetForm] = useForm({
    task: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim().length > 2) {
      dispatch({
        type: 'add',
        payload: {
          id: new Date().getTime(),
          todo: task,
          done: false,
        },
      });
      alert('done!');
      resetForm();
    }
  };

  return (
    <div>
      <h2>Form</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Introduce a todo ..."
          name="task"
          value={task}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          className="btn btn-outline-primary"
          type="submit"
          value="Add"
          disabled={!(task.trim().length > 2)}
        />
      </form>
    </div>
  );
};

export default Form;
