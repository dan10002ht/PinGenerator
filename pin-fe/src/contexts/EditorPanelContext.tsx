import React, { createContext } from "react";
import { useLocation } from "react-router-dom";

export const EditorPanelContext = createContext({});

const EditorPanelContextProvider = ({ children, value }) => {
  return (
    <EditorPanelContext.Provider value={value}>
      {children}
    </EditorPanelContext.Provider>
  );
};

export default EditorPanelContextProvider;
