import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/authentication/private.component';
import StudentsNavbar from './components/students/navbar/students-navbar.component';
import RouteConstants from './constants/routes';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login.component';

const MainRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <PrivateRoute path={RouteConstants.DASHBOARD_ROUTE} component={Dashboard} />
    <PrivateRoute path={RouteConstants.STUDENTS_ROUTE} component={StudentsNavbar} />
  </Switch>
);

export default MainRoutes;
