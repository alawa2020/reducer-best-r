import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AboutScreen from '../components/about/AboutScreen';
import NotFound from '../components/others/NotFound';
import TodosScreen from '../components/todos/TodosScreen';
import NavBar from '../components/ui/NavBar';

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={TodosScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/notfound" component={NotFound} />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
