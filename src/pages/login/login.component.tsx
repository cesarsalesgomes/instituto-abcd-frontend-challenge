import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box, Grid } from '@material-ui/core';

import loginStyles from './login.style';
import useLogin from './login.hooks';

const Login: React.FC = () => {
  const classes = loginStyles();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" fullWidth variant="contained" className={classes.submit}>
              Login
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
