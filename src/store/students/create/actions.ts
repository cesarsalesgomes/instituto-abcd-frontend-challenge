import { action } from 'typesafe-actions';
import { CreateStudentTypes } from './types';

export const loadRequest = () => action(CreateStudentTypes.LOAD_REQUEST);

export const loadSuccess = () => action(CreateStudentTypes.LOAD_SUCCESS);

export const loadFailure = () => action(CreateStudentTypes.LOAD_FAILURE);
