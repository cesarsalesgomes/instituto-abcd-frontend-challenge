/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
import { Container } from '@material-ui/core';
import { Route, Redirect } from 'react-router-dom';

import useAuthentication from './private.hooks';
import Menu from '../menu/menu.component';
import privateStyles from './private.style';

const PrivateRoute = (
  { component: Component, path, ...rest }: { component: any, path: string },
) => {
  const isAuthenticated = useAuthentication();
  const classes = privateStyles();

  return (
    <Route
      {...rest}
      render={
        (props) => (isAuthenticated() ? (
          <Container className={classes.container}>
            <Menu />
            <main className={classes.content}>
              <Component path={path} {...props} />
            </main>
          </Container>
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
