import {createContext} from 'react';
import {IContextProvider, IAuthContext} from '../interface';
import useFetchApi from '../hooks/api/useFetchApi.ts';

export const AuthContext = createContext<IAuthContext>({});

export const AuthContextProvider = ({children}: IContextProvider) => {
  const {data} = useFetchApi({
    url: '/user',
    defaultData: {},
  });

  const value = {data};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
