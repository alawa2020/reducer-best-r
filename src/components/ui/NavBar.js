import React from 'react';

import { useHistory, Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();

  const handleClickLogout = () => {
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
        <span className="navbar-text text-info">Pedro</span>
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
