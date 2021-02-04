/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

import SchoolYear from '../../../enums/school-grade.enum';

/**
 * Action types
 */
export enum StudentsListTypes {
  LOAD_REQUEST = '@students_list/LOAD_REQUEST',
  LOAD_SUCCESS = '@students_list/LOAD_SUCCESS',
  LOAD_FAILURE = '@students_list/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Student {
  imageUrl: string;
  name: string;
  schoolYear: SchoolYear
}

export interface StudentsListBySchoolYear {
  schoolYear: SchoolYear,
  students: Student[]
}

/**
 * State type
 */
export interface StudentsListState {
  readonly data: StudentsListBySchoolYear[] | null;
  readonly loading: boolean;
  readonly error: boolean;
}
