/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

import {
  Box,
  Button, Card, Checkbox, FormControl, FormControlLabel, Grid, Icon, InputAdornment, InputLabel, OutlinedInput, Slider,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import studentsStyles from './create-student.styles';
import IconPerson from '../../assets/icons/icon_person.svg';
import IconShool from '../../assets/icons/icon_school.svg';
import SchoolYear from '../../enums/school-grade.enum';
import useCreateStudent from './create-student.hooks';
import { ApplicationState } from '../../store';
import FileUtils from '../../utils/File.utils';

const CreateStudent: React.FC = () => {
  const classes = studentsStyles();
  const { loading } = useSelector((state: ApplicationState) => state?.createStudent);

  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File>();
  const [name, setName] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [schoolYear, setSchoolYear] = useState<SchoolYear>(SchoolYear.PRE);
  const [terms, setTerms] = useState<boolean>(false);

  // Avatar
  const uploadImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const image = event.target.files[0];

      setAvatarUrl(FileUtils.createObjectUrl(image));
      setAvatarFile(image as File);
    }
  };

  // Ano escolar
  const schoolYearSliderMarks = [
    {
      value: 0,
      label: 'Pré',
    },
    {
      value: 33,
      label: '1',
    },
    {
      value: 66,
      label: '2',
    },
    {
      value: 100,
      label: '3',
    },
  ];

  const valueLabelFormat = (value: number) => schoolYearSliderMarks.findIndex((mark) => mark.value === value);

  const schoolYearHandler = (event: any, newValue: number | number[]) => {
    switch (newValue) {
      case schoolYearSliderMarks[0].value:
        setSchoolYear(SchoolYear.PRE);
        break;
      case schoolYearSliderMarks[1].value:
        setSchoolYear(SchoolYear.FIRST);
        break;
      case schoolYearSliderMarks[2].value:
        setSchoolYear(SchoolYear.SECOND);
        break;
      case schoolYearSliderMarks[3].value:
        setSchoolYear(SchoolYear.THIRD);
        break;
      default:
        setSchoolYear(SchoolYear.PRE);
        break;
    }
  };

  // Envio de formulário
  const disableSubmitButton = () => {
    if (!(avatarUrl && name && school && schoolYear >= 0 && terms)) return true;

    return false;
  };

  const createStudent = useCreateStudent();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createStudent(name, schoolYear, avatarFile as File);
  };

  return (
    <Grid container className={classes.containerCard} direction="row" justify="center">
      <Grid item xs={10} sm={8} lg={7}>
        <Card className={classes.card}>
          <form className={classes.form} onSubmit={onSubmit}>
            <Grid container className={classes.containerCard} direction="row" justify="center">

              {/* Avatar */}
              <Grid item xs={12} className={classes.gridItemAvatarImage}>
                <img src={avatarUrl as string} className={classes.avatarImage} />
              </Grid>
              <Grid item xs={12} className={classes.gridItemAvatarInput}>
                <input
                  accept="image/*"
                  className={classes.avatarInput}
                  id="raised-button-file"
                  multiple
                  type="file"
                  onChange={(e) => uploadImageHandler(e)}
                  data-testid="avatar"
                />
                <label htmlFor="raised-button-file">
                  <Button variant="contained" className={classes.avatarButton} component="span">
                    Mudar avatar
                  </Button>
                </label>
              </Grid>

              {/* Nome Completo */}
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel className={classes.inputLabel}>
                    Nome Completo
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    required
                    fullWidth
                    name="name"
                    id="name"
                    classes={{ root: classes.inputRadius }}
                    onChange={(e) => setName(e.target.value)}
                    inputProps={{ 'data-testid': 'name' }}
                    startAdornment={(
                      <InputAdornment position="start">
                        <Icon>
                          <img src={IconPerson} height={20} width={20} />
                        </Icon>
                      </InputAdornment>
                    )}
                    labelWidth={132}
                  />
                </FormControl>
              </Grid>

              {/* Escola */}
              <Grid item xs={12} className={classes.gridItem}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel className={classes.inputLabel}>
                    Escola
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    required
                    fullWidth
                    name="name"
                    id="school"
                    classes={{ root: classes.inputRadius }}
                    onChange={(e) => setSchool(e.target.value)}
                    startAdornment={(
                      <InputAdornment position="start">
                        <Icon>
                          <img src={IconShool} height={20} width={20} />
                        </Icon>
                      </InputAdornment>
                    )}
                    labelWidth={50}
                    inputProps={{ 'data-testid': 'school' }}
                  />
                </FormControl>
              </Grid>

              {/* Ano escolar */}
              <Grid item xs={12} className={classes.gridItem}>
                <Grid container className={classes.containerCard}>
                  <Grid item sm={12} md={6} lg={5} className={classes.gridItem}>
                    <Box component="div" className={classes.schoolYearAvatarImage} />
                  </Grid>
                  <Grid item sm={12} md={6} lg={7} className={classes.gridItem}>
                    <Grid
                      container
                      direction="column"
                      justify="space-around"
                      alignItems="flex-start"
                      className={classes.gridContainerReverse}
                    >
                      <Grid
                        item
                        className={classes.gridItemSlider}
                      >
                        <Box component="div" className={classes.schoolYearSliderLabel}>
                          Ano escolar
                        </Box>
                        <Slider
                          defaultValue={SchoolYear.PRE}
                          aria-labelledby="discrete-slider-custom"
                          step={null}
                          valueLabelFormat={valueLabelFormat}
                          valueLabelDisplay="auto"
                          marks={schoolYearSliderMarks}
                          className={classes.gridItemSlider}
                          onChange={schoolYearHandler}
                          data-testid="schoolYear"
                        />
                      </Grid>
                      <Grid item>
                        <Box component="span" className={classes.schoolYearPreDescriptionBold}>
                          Pré I:
                        </Box>
                        <Box component="span" className={classes.schoolYearPreDescriptionLight}>
                          Aluno completou 4 anos antes do dia 31 de março de 2020.
                        </Box>
                      </Grid>
                      <Grid item>
                        <Box component="span" className={classes.schoolYearPreDescriptionBold}>
                          Pré II:
                        </Box>
                        <Box component="span" className={classes.schoolYearPreDescriptionLight}>
                          Aluno completou 5 anos antes do dia 31 de março de 2020
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              {/* Termos de aceite */}
              <Grid item xs={12} className={classes.gridItemTerms}>
                <FormControlLabel
                  control={<Checkbox checked={terms} onChange={(e) => setTerms(e.target.checked)} data-testid="terms" />}
                  label={(
                    <Box component="span" className={classes.termsDescriptionLabel}>
                      Eu autorizo o EduEdu a coletar e processar os dados do meu filho(a) conforme a política de privacidade.
                    </Box>
                  )}
                />
              </Grid>

              <Grid item xs={8}>
                <Button
                  type="submit"
                  disabled={disableSubmitButton() || loading}
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  data-testid="button-submit"
                >
                  Adicionar aluno
                </Button>
              </Grid>
            </Grid>

          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CreateStudent;
