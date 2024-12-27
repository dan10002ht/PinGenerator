import {createContext} from 'react';
import {IContextProvider, IGenerateContextValue} from '../interfaces/interface.ts';

export const GenerateContext = createContext<IGenerateContextValue>({});

export const GenerateContextProvider = ({children, value}: IContextProvider) => {
  return <GenerateContext.Provider value={value}>{children}</GenerateContext.Provider>;
};

export default GenerateContextProvider;
