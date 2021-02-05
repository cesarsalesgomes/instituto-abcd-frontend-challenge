/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Button, Card, FormControl, Icon, InputAdornment, InputLabel, OutlinedInput,
} from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import IconPlus from '../../../assets/icons/icon_plus.png';
import IconSearch from '../../../assets/icons/icon_search.svg';

import studentsNavbarStyles from './students-navbar.styles';
import RouteConstants from '../../../constants/routes';
import { loadFailure, loadRequest, loadSuccess } from '../../../store/students/list/actions';
import FirebaseService from '../../../services/firebase.service';
import StudentsListFactory from '../list/students-list.factory';
import { ApplicationState } from '../../../store';

const StudentsNavbar: React.FC = () => {
  const classes = studentsNavbarStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [nameToFilter, setNameToFilter] = useState<string>('');
  const { data } = useSelector((state: ApplicationState) => state?.studentsList);

  const onClickAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    history.push(RouteConstants.CREATE_STUDENTS_ROUTE);
  };

  // Filtro por nome do estudante
  useEffect(() => {
    // Debounce em digitação
    const timer = setTimeout(() => {
      if (nameToFilter && nameToFilter.length >= 3) {
        dispatch(loadRequest());

        (async () => {
          try {
            const studentsFromFirestore = await FirebaseService.Instance.getStudentsWithFilterName(nameToFilter);
            const studentsListBySchoolYear = StudentsListFactory.Instance.createStudentsListBySchoolYearFromStudents(studentsFromFirestore);

            dispatch(loadSuccess(studentsListBySchoolYear));
          } catch (error) {
            dispatch(loadFailure());
          }
        })();
      } else if (data?.length === 0) {
        // Necessário para retornar ao valor inicial da lista ao remover filtro
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
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [dispatch, nameToFilter]);

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
            onChange={(e) => setNameToFilter(e.target.value)}
            endAdornment={(
              <InputAdornment position="end">
                <Icon>
                  <img src={IconSearch} height={20} width={20} />
                </Icon>
              </InputAdornment>
            )}
            labelWidth={70}
            inputProps={{ 'data-testid': 'search' }}
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
