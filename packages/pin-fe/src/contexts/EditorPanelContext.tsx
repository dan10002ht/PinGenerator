import {createContext} from 'react';

export const EditorPanelContext = createContext({});

const EditorPanelContextProvider = ({children, value}) => {
  return <EditorPanelContext.Provider value={value}>{children}</EditorPanelContext.Provider>;
};

export default EditorPanelContextProvider;
