import React from 'react';
import {
  Typography, Card, CardContent, CardMedia, Box, Grid,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import studentCardStyles from './student-card.style';
import { Student } from '../../../store/students/list/types';

const StudentCard: React.FC<Student> = ({
  imageUrl, name, schoolYear,
}) => {
  const classes = studentCardStyles();

  return (
    <Card className={classes.root}>
      <Grid container justify="center">
        <CardMedia
          className={classes.media}
          component="img"
          src={imageUrl}
          title={name}
        />
      </Grid>

      <CardContent>
        <Typography className={classes.title}>
          {name}
        </Typography>
        <Typography className={classes.subTitle}>
          {schoolYear > 0 ? (
            <Box>
              {schoolYear}
              ° ano
            </Box>
          ) : (
              <Box>Pré</Box>
            )}
        </Typography>
      </CardContent>
    </Card>
  );
};

StudentCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  schoolYear: PropTypes.number.isRequired,
};

export default StudentCard;
