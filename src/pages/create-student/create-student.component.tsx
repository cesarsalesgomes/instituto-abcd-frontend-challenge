/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

import {
  Box,
  Button, Card, Checkbox, FormControl, FormControlLabel, Grid, Icon, InputAdornment, InputLabel, OutlinedInput, Slider,
} from '@material-ui/core';
import studentsStyles from './create-student.styles';
import IconPerson from '../../assets/icons/icon_person.svg';
import IconShool from '../../assets/icons/icon_school.svg';

const CreateStudent: React.FC = () => {
  const classes = studentsStyles();

  const [name, setName] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [terms, setTerms] = useState<boolean>(false);

  console.log(name);
  console.log(school);

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

  return (
    <Grid container className={classes.containerCard} direction="row" justify="center">
      <Grid item xs={10} sm={8} md={7} lg={6}>
        <Card className={classes.card}>
          <form className={classes.form}>
            <Grid container className={classes.containerCard} direction="row" justify="center">

              {/* Nome Completo */}
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel>
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
                    startAdornment={(
                      <InputAdornment position="start">
                        <Icon>
                          <img src={IconPerson} height={20} width={20} />
                        </Icon>
                      </InputAdornment>
                    )}
                    labelWidth={118}
                  />
                </FormControl>
              </Grid>

              {/* Escola */}
              <Grid item xs={12} className={classes.gridItem}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel>
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
                  />
                </FormControl>
              </Grid>

              {/* Ano escolar */}
              <Grid item xs={12} className={classes.gridItem}>
                <Grid container className={classes.containerCard}>
                  <Grid item xs={12} sm={6} md={4} lg={4} className={classes.gridItem}>
                    <Box component="div" className={classes.schoolYearAvatarImage} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={8} lg={8} className={classes.gridItem}>
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
                          defaultValue={0}
                          aria-labelledby="discrete-slider-custom"
                          step={null}
                          valueLabelFormat={valueLabelFormat}
                          valueLabelDisplay="auto"
                          marks={schoolYearSliderMarks}
                          className={classes.gridItemSlider}
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
                  control={<Checkbox checked={terms} onChange={(e) => setTerms(e.target.checked)} />}
                  label={(
                    <Box component="span" className={classes.termsDescriptionLabel}>
                      Eu autorizo o EduEdu a coletar e processar os dados do meu filho(a) conforme a política de privacidade.
                    </Box>
                  )}
                />
              </Grid>

              <Grid item xs={6}>
                <Button type="submit" fullWidth variant="contained" className={classes.submit}>
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
