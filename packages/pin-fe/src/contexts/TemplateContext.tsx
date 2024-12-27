import {createContext} from 'react';
import {IContextProvider, ITemplateContextValue} from '../interfaces/interface.ts';

export const TemplateContext = createContext<ITemplateContextValue>({});

export const TemplateContextProvider = ({children, value}: IContextProvider) => {
  return <TemplateContext.Provider value={value}>{children}</TemplateContext.Provider>;
};
