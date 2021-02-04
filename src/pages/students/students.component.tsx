import React from 'react';

import { Grid } from '@material-ui/core';
import StudentsNavbar from '../../components/students/navbar/students-navbar.component';
import StudentsList from '../../components/students/list/students-list.component';
import studentsStyles from './students.styles';

const Students: React.FC = () => {
  const classes = studentsStyles();

  return (
    <Grid container className={classes.containerCard}>
      <StudentsNavbar />
      <StudentsList />
    </Grid>
  );
};

export default Students;
