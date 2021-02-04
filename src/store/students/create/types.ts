/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

/**
 * Action types
 */
export enum CreateStudentTypes {
  LOAD_REQUEST = '@create_student/LOAD_REQUEST',
  LOAD_SUCCESS = '@create_student/LOAD_SUCCESS',
  LOAD_FAILURE = '@create_student/LOAD_FAILURE'
}

/**
 * State type
 */
export interface CreateStudentState {
  readonly loading: boolean;
  readonly error: boolean;
}
