import {createContext} from 'react';
import {IContextProvider, ITemplateContextValue} from '../interface';

export const TemplateContext = createContext<ITemplateContextValue>({});

export const TemplateContextProvider = ({children, value}: IContextProvider) => {
  return <TemplateContext.Provider value={value}>{children}</TemplateContext.Provider>;
};
