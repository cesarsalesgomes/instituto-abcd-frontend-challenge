/* eslint-disable max-len */
import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import { useDispatch, useSelector } from 'react-redux';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import StudentCardListBySchoolYear from '../../../components/students/card-list-by-school-year/card-list-by-school-year.component';
import studentListStyles from './students-list.styles';
import FirebaseService from '../../../services/firebase.service';
import { loadFailure, loadRequest, loadSuccess } from '../../../store/students/list/actions';
import StudentsListFactory from './students-list.factory';
import { ApplicationState } from '../../../store';

const StudentsList: React.FC = () => {
  const classes = studentListStyles();
  const dispatch = useDispatch();
  const { studentsList } = useSelector((state: ApplicationState) => state);

  useEffect(() => {
    dispatch(loadRequest());

    (async () => {
      try {
        const studentsFromFirestore = await FirebaseService.Instance.getStudents();

        const studentsListBySchoolYear = StudentsListFactory.Instance.createStudentsListBySchoolYearFromStudents(studentsFromFirestore);

        dispatch(loadSuccess(studentsListBySchoolYear));
      } catch (error) {
        dispatch(loadFailure());
      }
    })();
  }, [dispatch]);

  return (
    <Box>
      {studentsList.loading ? (
        <Grid container justify="center" className={classes.container}>
          <CircularProgress />
        </Grid>
      ) : (
          <Box>
            {
              studentsList.data && studentsList.data.length > 0 ? (
                <Grid container>
                  { studentsList.data?.map(({ schoolYear, students }, index) => (
                    <Grid item key={index} className={classes.gridItem} xs={12}>
                      <StudentCardListBySchoolYear schoolYear={schoolYear} students={students} />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                  <Grid container justify="center" className={classes.container}>
                    <Typography variant="h6">
                      Nenhum estudante cadastrado
                    </Typography>
                  </Grid>
                )
            }
          </Box>
        )}
    </Box>
  );
};

export default StudentsList;
