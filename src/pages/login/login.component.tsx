import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box, Grid } from '@material-ui/core';

import { useSelector } from 'react-redux';
import loginStyles from './login.style';
import useLogin from './login.hooks';
import { ApplicationState } from '../../store';
import StringUtils from '../../utils/String.utils';

const Login: React.FC = () => {
  const classes = loginStyles();
  const { loading } = useSelector((state: ApplicationState) => state?.login);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const disableSubmit = (): boolean => {
    if (!(email && StringUtils.validateEmail(email))) {
      return true;
    }

    if (!(password)) {
      return true;
    }

    return false;
  };

  /**
   * Login Hook
   */
  const login = useLogin();
  const loginOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Grid container className={classes.loginContainer} direction="row" justify="center" alignItems="center">
      <Grid item xs={10} sm={7} md={4} lg={3}>
        <Box component="div" className={classes.loginFormBox}>

          <Grid container direction="row" justify="center">
            <Box component="div" className={classes.loginFormHeaderImage} />
          </Grid>

          <form className={classes.form} onSubmit={loginOnSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              inputProps={{ 'data-testid': 'email' }}
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              inputProps={{ 'data-testid': 'password' }}
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              data-testid="button-submit"
              disabled={loading || disableSubmit()}
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Login
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
