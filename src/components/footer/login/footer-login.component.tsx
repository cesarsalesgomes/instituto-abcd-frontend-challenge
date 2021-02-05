/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  Box,
} from '@material-ui/core';
import menuStyles from './footer-login.style';

const FooterLogin: React.FC = () => {
  const classes = menuStyles();

  return (
    <Box className={classes.box}>
      © 2020 EduEdu, todos os direitos reservados
    </Box>
  );
};

export default FooterLogin;
