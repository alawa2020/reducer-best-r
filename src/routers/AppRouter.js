import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import TodoContext from '../contexts/TodoContext';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const { userAuth } = useContext(TodoContext);
  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={LoginScreen}
          isAuthenticated={userAuth.logged}
        />
        <PrivateRoute
          path="/"
          component={DashboardRoutes}
          isAuthenticated={userAuth.logged}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
