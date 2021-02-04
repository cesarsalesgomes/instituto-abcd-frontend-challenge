import { Reducer } from 'redux';
import { CreateStudentState, CreateStudentTypes } from './types';

const INITIAL_STATE: CreateStudentState = {
  loading: false,
  error: false,
};

const reducer: Reducer<CreateStudentState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CreateStudentTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case CreateStudentTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, error: false,
      };
    case CreateStudentTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true,
      };
    default:
      return state;
  }
};

export default reducer;
