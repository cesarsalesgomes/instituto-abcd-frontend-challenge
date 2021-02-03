import React from 'react';
import {
  Typography, Box, Grid, Divider,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import studentCardListStyles from './card-list-by-school-year.style';
import { Student } from '../../../store/students/types';
import SchoolYear from '../../../enums/school-grade.enum';
import StudentCard from '../card/student-card.component';

const StudentCardListBySchoolYear: React.FC<{ schoolYear: SchoolYear, students: Student[] }> = ({
  schoolYear, students,
}) => {
  const classes = studentCardListStyles();

  return (
    <Box>
      <Typography className={classes.title}>
        {schoolYear > 0 ? (
          <Box>
            {schoolYear}
              ° ano
          </Box>
        ) : (
            <Box>Pré</Box>
          )}
      </Typography>
      <Divider className={classes.divider} />
      <Grid container justify="flex-start" spacing={3}>
        {students?.map((value, index) => (
          <Grid key={index} item>
            <StudentCard {...value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

StudentCardListBySchoolYear.propTypes = {
  students: PropTypes.array.isRequired,
  schoolYear: PropTypes.number.isRequired,
};

export default StudentCardListBySchoolYear;
