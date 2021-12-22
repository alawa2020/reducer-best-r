import React, { useContext } from 'react';

import { useHistory, Link, NavLink } from 'react-router-dom';
import TodoContext from '../../contexts/TodoContext';
import types from '../../types/types';

const NavBar = () => {
  const { userAuth, dispatchAuth } = useContext(TodoContext);
  const history = useHistory();

  const handleClickLogout = () => {
    dispatchAuth({
      type: types.logout,
    });
    history.replace('/login');
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        APP
      </Link>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/">
              Todos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
        <span className="navbar-text text-info">{userAuth.name}</span>
        <button
          onClick={handleClickLogout}
          type="button"
          className="btn text-secondary"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
