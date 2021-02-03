import { useDispatch } from 'react-redux';
import { Dispatch, useCallback } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

import { loadRequest, loadSuccess, loadFailure } from '../../store/login/actions';
import FirebaseService from '../../services/firebase.service';
import RouteConstants from '../../constants/routes';
import ErrorConstants from '../../constants/errors';

async function getJWTToken(email: string, password: string) {
  const firebaseService = FirebaseService.Instance;

  await firebaseService.signInWithEmailAndPassword(email, password);

  return firebaseService.getAuthenticatedUserToken();
}

function dispatchSuccess(token: string, dispatch: Dispatch<any>, history: any) {
  dispatch(loadSuccess({ token }));
  history.push(RouteConstants.STUDENTS_ROUTE);
}

function dispatchError(dispatch: Dispatch<any>) {
  dispatch(loadFailure());
  toast.error(ErrorConstants.ERROR_LOGIN);
}

function checkToken(dispatch: Dispatch<any>, history: any, token?: string) {
  if (token) {
    dispatchSuccess(token, dispatch, history);
  } else {
    dispatchError(dispatch);
  }
}

const useLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const login = useCallback(async (email: string, password: string) => {
    dispatch(loadRequest());

    try {
      const token = await getJWTToken(email, password);

      checkToken(dispatch, history, token);
    } catch (error) {
      dispatchError(dispatch);
    }
  }, [dispatch, history]);

  return login;
};

export default useLogin;
