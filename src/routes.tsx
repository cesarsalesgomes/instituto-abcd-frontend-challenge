import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/authentication/private.component';
import RouteConstants from './constants/routes';
import Login from './pages/login/login.component';
import Students from './pages/students/students.component';

const MainRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <PrivateRoute path={RouteConstants.STUDENTS_ROUTE} component={Students} />
  </Switch>
);

export default MainRoutes;
