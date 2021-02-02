/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
import { Container } from '@material-ui/core';
import { Route, Redirect } from 'react-router-dom';

import useAuthentication from './private.hooks';

const PrivateRoute = (
  { component: Component, path, ...rest }: { component: any, path: string },
) => {
  const isAuthenticated = useAuthentication();

  return (
    <Route
      {...rest}
      render={
        (props) => (isAuthenticated() ? (
          <Container>
            <Component path={path} {...props} />
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
