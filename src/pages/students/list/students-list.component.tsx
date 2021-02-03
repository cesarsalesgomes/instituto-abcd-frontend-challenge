/* eslint-disable max-len */
import React from 'react';
import Grid from '@material-ui/core/Grid';

import StudentCardListBySchoolYear from '../../../components/students/card-list-by-school-year/card-list-by-school-year.component';
import studentListStyles from './students-list.styles';
import StudentsListFactory from './students-list.factory';
import FirebaseService from '../../../services/firebase.service';

const StudentsList: React.FC = () => {
  const classes = studentListStyles();

  const studentsFromFirestore = FirebaseService.Instance.getStudents();

  const studentsListBySchoolYear = StudentsListFactory.Instance.createStudentsListBySchoolYearFromStudents(studentsFromFirestore);

  return (
    <Grid container>
      {studentsListBySchoolYear?.map(({ schoolYear, students }, index) => (
        <Grid item key={index} className={classes.gridItem} xs={12}>
          <StudentCardListBySchoolYear schoolYear={schoolYear} students={students} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StudentsList;
