import React, { useContext } from 'react';
import TodoContext from '../../contexts/TodoContext';
import useForm from '../../hooks/useForm';

const Form = () => {
  const { dispatch, editionMode, setEditionMode } = useContext(TodoContext);

  const [{ task }, handleChange, resetForm] = useForm({
    task: '',
  });

  const handleSubmitAdd = (e) => {
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
      resetForm();
    }
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'edit',
      payload: {
        id: editionMode.id,
        todo: task,
      },
    });
    setEditionMode({ id: '', state: false });
    resetForm();
  };

  const cancelEditionModeClick = () => {
    setEditionMode({ id: '', state: false });
  };

  return (
    <div>
      <h2>Form</h2>
      <hr />
      <form onSubmit={!editionMode.state ? handleSubmitAdd : handleSubmitEdit}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder={
            !editionMode.state ? 'Introduce a todo ...' : `${editionMode.todo}`
          }
          name="task"
          value={task}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          className={
            !editionMode.state
              ? 'btn btn-outline-primary'
              : 'btn btn-outline-warning'
          }
          type="submit"
          value={!editionMode.state ? 'Add' : 'Save'}
          disabled={!(task.trim().length > 2)}
        />
        {editionMode.state && (
          <input
            onClick={cancelEditionModeClick}
            className=" ml-3 btn btn-outline-danger"
            type="button"
            value="Cancel"
          />
        )}
      </form>
    </div>
  );
};

export default Form;
