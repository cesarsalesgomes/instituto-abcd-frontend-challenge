/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { CssBaseline } from '@material-ui/core';
import { Route, Redirect } from 'react-router-dom';

import useAuthentication from './private.hooks';
import Menu from '../menu/menu.component';
import privateStyles from './private.style';
import Navbar from '../navbar/navbar.component';
import Content from '../content/content.component';

const PrivateRoute = (
  { component, path, ...rest }: { component: any, path: string },
) => {
  const isAuthenticated = useAuthentication();
  const classes = privateStyles();

  return (
    <Route
      {...rest}
      render={
        (props) => (isAuthenticated() ? (
          <div className={classes.root}>
            <CssBaseline />
            <Navbar />
            <Menu />
            <Content path={path} component={component} props={props} />
          </div>
        ) : (
            <Redirect to={{
              pathname: '/',
              state: { from: props.location },
            }}
            />
          ))
      }
    />
  );
};

export default PrivateRoute;
