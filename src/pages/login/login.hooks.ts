import { useCallback } from 'react';
import { useHistory } from 'react-router';

import RouteConstants from '../../constants/routes';

const useLogin = () => {
  const history = useHistory();

  const login = useCallback(async (username: string, password: string) => {
    console.log(username, password);

    history.push(RouteConstants.DASHBOARD_ROUTE);
  }, [history]);

  return login;
};

export default useLogin;
