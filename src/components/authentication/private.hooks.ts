import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { ApplicationState } from '../../store';

function checkTokenNotExpired(token: string) {
  const payload = JSON.parse(atob(token.split('.')[1]));

  return (payload.exp * 1000) > Date.now();
}

const useAuthentication = () => {
  const token = useSelector((state: ApplicationState) => state.login?.data?.token);

  const login = useCallback((): boolean => {
    if (!token) {
      return false;
    }

    return checkTokenNotExpired(token);
  }, [token]);

  return login;
};

export default useAuthentication;
