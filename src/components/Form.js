import React from 'react';
import useForm from '../hooks/useForm';

const Form = () => {
  const [{ task }, handleChange, resetForm] = useForm({
    task: '',
  });

  return (
    <div>
      <h2>Form</h2>
      <hr />
      <form>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Introduce a todo ..."
          name="task"
          value={task}
          onChange={handleChange}
        />
        <input className="btn btn-outline-primary" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Form;
