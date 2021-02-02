/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

/**
 * Action types
 */
export enum LoginTypes {
  LOAD_REQUEST = '@login/LOAD_REQUEST',
  LOAD_SUCCESS = '@login/LOAD_SUCCESS',
  LOAD_FAILURE = '@login/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Login {
  token: string;
}

/**
 * State type
 */
export interface LoginState {
  readonly data: Login | null;
  readonly loading: boolean;
  readonly error: boolean;
}
