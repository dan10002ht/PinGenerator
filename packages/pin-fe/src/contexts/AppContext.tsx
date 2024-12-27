import {createContext, useState} from 'react';
import {IContextProvider, IAppContext} from '../interfaces/interface.ts';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppContext = createContext<IAppContext>({});

export const AppContextProvider = ({children}: IContextProvider) => {
  const [loading, setLoading] = useState(false);

  const setToast = (message: string) => {
    toast(message);
  };

  return (
    <AppContext.Provider
      value={{
        setToast,
        loading,
        setLoading,
      }}
    >
      {children}
      <ToastContainer />
    </AppContext.Provider>
  );
};

export default AppContextProvider;
