import { action } from 'typesafe-actions';
import { StudentsListTypes, StudentsListBySchoolYear } from './types';

export const loadRequest = () => action(StudentsListTypes.LOAD_REQUEST);

export const loadSuccess = (
  data: StudentsListBySchoolYear[] | null,
) => action(StudentsListTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(StudentsListTypes.LOAD_FAILURE);
