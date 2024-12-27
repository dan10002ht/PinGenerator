import {createContext} from 'react';
import {IContextProvider, IAuthContext} from '../interfaces/interface.ts';
import useFetchApi from '../hooks/api/useFetchApi.ts';
import {isEmpty} from '../helpers/utils/isEmpty.ts';

export const AuthContext = createContext<IAuthContext>({});

export const AuthContextProvider = ({children}: IContextProvider) => {
  const {data, fetched} = useFetchApi({
    url: '/user',
    defaultData: {},
  });

  if (
    fetched &&
    isEmpty(data) &&
    !['/auth/login', '/auth/register'].includes(window.location.pathname)
  ) {
    window.location.href = '/auth/login';
    return null;
  }

  const value = {data};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
