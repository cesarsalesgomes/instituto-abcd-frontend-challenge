/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Button, Card, FormControl, Icon, InputAdornment, InputLabel, OutlinedInput,
} from '@material-ui/core';
import { useHistory } from 'react-router';
import IconPlus from '../../../assets/icons/icon_plus.png';
import IconSearch from '../../../assets/icons/icon_search.svg';

import studentsNavbarStyles from './students-navbar.styles';
import RouteConstants from '../../../constants/routes';

const StudentsNavbar: React.FC = () => {
  const classes = studentsNavbarStyles();
  const history = useHistory();

  const onClickAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    history.push(RouteConstants.CREATE_STUDENTS_ROUTE);
  };

  return (
    <Card className={classes.card}>
      <Grid container justify="space-between" alignItems="center" className={classes.containerCard}>
        <FormControl variant="outlined">
          <InputLabel>
            Pesquisar
          </InputLabel>
          <OutlinedInput
            type="text"
            classes={{ root: classes.inputSearch }}
            endAdornment={(
              <InputAdornment position="end">
                <Icon>
                  <img src={IconSearch} height={20} width={20} />
                </Icon>
              </InputAdornment>
            )}
            labelWidth={70}
          />
        </FormControl>
        <Grid item xs={3}>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={(
              <Icon>
                <img src={IconPlus} height={20} width={20} />
              </Icon>
            )}
            onClick={onClickAddStudent}
          >
            Adicionar novo aluno
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default StudentsNavbar;
