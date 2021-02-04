import { Reducer } from 'redux';
import { StudentsListState, StudentsListTypes } from './types';

const INITIAL_STATE: StudentsListState = {
  data: null,
  loading: false,
  error: false,
};

const reducer: Reducer<StudentsListState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StudentsListTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case StudentsListTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload,
      };
    case StudentsListTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, data: null,
      };
    default:
      return state;
  }
};

export default reducer;
