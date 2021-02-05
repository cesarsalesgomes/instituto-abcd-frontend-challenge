/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  Box,
} from '@material-ui/core';
import footerDashboardStyles from './footer-dashboard.style';

const FooterDashboard: React.FC = () => {
  const classes = footerDashboardStyles();

  return (
    <Box className={classes.box}>
      © 2020 EduEdu, todos os direitos reservados
    </Box>
  );
};

export default FooterDashboard;
