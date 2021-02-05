import { Reducer } from 'redux';
import { NavbarTypes, NavbarState } from './types';

const INITIAL_STATE: NavbarState = {
  data: {
    open: false,
  },
};

const reducer: Reducer<NavbarState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavbarTypes.CLOSE:
      return { ...state, data: { open: false } };
    case NavbarTypes.OPEN:
      return { ...state, data: { open: true } };
    default:
      return state;
  }
};

export default reducer;
