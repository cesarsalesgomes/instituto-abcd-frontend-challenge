/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import {
  Box, FormControl, Grid, Icon, InputAdornment, InputLabel, OutlinedInput,
} from '@material-ui/core';

import { useSelector } from 'react-redux';
import loginStyles from './login.style';
import useLogin from './login.hooks';
import { ApplicationState } from '../../store';
import StringUtils from '../../utils/String.utils';
import IconPerson from '../../assets/icons/icon_email.svg';
import IconPassword from '../../assets/icons/icon_password.svg';
import FooterLogin from '../../components/footer/login/footer-login.component';

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

            {/* Email */}
            <FormControl variant="outlined" className={classes.formControlEmail}>
              <InputLabel>
                Email
              </InputLabel>
              <OutlinedInput
                type="email"
                required
                fullWidth
                name="email"
                id="email"
                classes={{ root: classes.inputRadius }}
                onChange={(e) => setEmail(e.target.value)}
                inputProps={{ 'data-testid': 'email' }}
                autoFocus
                endAdornment={(
                  <InputAdornment position="end">
                    <Icon>
                      <img src={IconPerson} height={20} width={20} />
                    </Icon>
                  </InputAdornment>
                )}
                labelWidth={42}
              />
            </FormControl>

            {/* Senha */}
            <FormControl variant="outlined" className={classes.formControlPassword}>
              <InputLabel>
                Senha
              </InputLabel>
              <OutlinedInput
                type="password"
                required
                fullWidth
                name="password"
                id="password"
                classes={{ root: classes.inputRadius }}
                onChange={(e) => setPassword(e.target.value)}
                inputProps={{ 'data-testid': 'password' }}
                autoFocus
                endAdornment={(
                  <InputAdornment position="end">
                    <Icon>
                      <img src={IconPassword} height={20} width={20} />
                    </Icon>
                  </InputAdornment>
                )}
                labelWidth={60}
              />
            </FormControl>

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
        <FooterLogin />
      </Grid>
    </Grid>
  );
};

export default Login;
