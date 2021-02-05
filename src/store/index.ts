import { createStore, Store, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* States */
import { LoginState } from './login/types';
import { StudentsListState } from './students/list/types';
import { CreateStudentState } from './students/create/types';
import { NavbarState } from './navbar/types';

/* Reducers */
import login from './login';
import studentsList from './students/list';
import createStudent from './students/create';
import navbar from './navbar';

export interface ApplicationState {
  login: LoginState,
  studentsList: StudentsListState,
  createStudent: CreateStudentState,
  navbar: NavbarState
}

const reducers = combineReducers({
  login,
  studentsList,
  createStudent,
  navbar,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store: Store<ApplicationState> = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
