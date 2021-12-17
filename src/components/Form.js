import React from 'react';

const Form = () => {
  return (
    <div>
      <h2>Form</h2>
      <hr />
      <form>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Introduce a todo ..."
        />
        <input className="btn btn-outline-primary" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Form;
