import {createContext} from 'react';
import {IContextProvider, IGenerateContextValue} from '../interface';

export const GenerateContext = createContext<IGenerateContextValue>({});

export const GenerateContextProvider = ({children, value}: IContextProvider) => {
  return <GenerateContext.Provider value={value}>{children}</GenerateContext.Provider>;
};

export default GenerateContextProvider;
