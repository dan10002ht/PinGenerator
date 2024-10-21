import { ReactNode } from "react";

export interface IComponentWithChildren {
  children: ReactNode;
}
export interface IHomePage extends IComponentWithChildren {}

export interface IContextProvider extends IComponentWithChildren {
  value?: object;
}

export interface ICollapsible extends IComponentWithChildren {
  title: string;
}

export interface IDrawerContextValue {
  showDrawer: any;
  setShowDrawer: any;
  handleShowDrawer: any;
  handleCloseDrawer: any;
  hasDrawer: any;
}

export interface IAuthContext {

}

export interface IGenerateContextValue {}
export interface ITemplateContextValue {}

export interface ICreateApiProps {
  url: string;
  defaultState?: any;
  fullResp?: boolean;
  catchError?: boolean;
  successCallback?: (p: any) => any;
  errorCallback?: (p: any) => any;
  successMsg?: string;
  errorMsg?: string;
}

export interface IPairKeyValue {
  key: string;
  value: any;
}


export interface IFetchApiProps {
  url: string;
  defaultData?: any[] | object;
  initLoad?: boolean;
  presentDataFunc?: any;
  method?: string;
  postData?: object;
}

export interface IAppContext {

}