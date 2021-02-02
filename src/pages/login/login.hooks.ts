import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import ErrorConstants from '../../constants/errors';

import RouteConstants from '../../constants/routes';
import { loadFailure, loadRequest, loadSuccess } from '../../store/login/actions';

const useLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const login = useCallback(async (username: string, password: string) => {
    dispatch(loadRequest());

    try {
      dispatch(loadSuccess({ token: `${username}${password}` }));

      history.push(RouteConstants.DASHBOARD_ROUTE);
    } catch (error) {
      dispatch(loadFailure());
      toast.error(ErrorConstants.ERROR_LOGIN);
    }
  }, [dispatch, history]);

  return login;
};

export default useLogin;
