import { useCallback } from 'react';

const useAuthentication = () => {
  const login = useCallback((): boolean => true, []);

  return login;
};

export default useAuthentication;
