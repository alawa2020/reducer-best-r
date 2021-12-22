import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import TodoContext from '../contexts/TodoContext';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  const { userAuth } = useContext(TodoContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
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
