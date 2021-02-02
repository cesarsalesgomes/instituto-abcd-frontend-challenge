import { createStore, Store, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* States */
import { LoginState } from './login/types';

/* Reducers */
import login from './login';

export interface ApplicationState {
  login: LoginState,
}

const reducers = combineReducers({
  login,
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
