import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TodoContext from '../../contexts/TodoContext';
import useForm from '../../hooks/useForm';
import types from '../../types/types';

const LoginScreen = () => {
  const { dispatchAuth } = useContext(TodoContext);
  const [formValues, handleChange] = useForm({
    nick: '',
  });

  const { nick } = formValues;

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nick.trim().length > 2) {
      dispatchAuth({
        type: types.login,
        payload: {
          name: nick,
        },
      });
      history.replace('/');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <div className="container">
        <form onSubmit={handleLogin}>
          <input
            className="form-control"
            placeholder="Input a nick..."
            type="text"
            autoComplete="off"
            name="nick"
            value={nick}
            onChange={handleChange}
          />
          <input
            className="btn btn-outline-info mt-3"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
