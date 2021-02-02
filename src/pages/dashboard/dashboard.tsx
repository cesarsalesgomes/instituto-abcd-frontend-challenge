import React from 'react';
import Grid from '@material-ui/core/Grid';

import dashboardStyles from './dashboard.styles';

const Dashboard: React.FC = () => {
  const classes = dashboardStyles();

  return (
    <Grid container className={classes.root}>
      Login realizado
    </Grid>
  );
};

export default Dashboard;
