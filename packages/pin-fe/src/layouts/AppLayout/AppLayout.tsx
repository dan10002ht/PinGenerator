import {IHomePage} from '../../interfaces/interface.ts';
import TopBar from './TopBar';
import DrawerContextProvider from '../../contexts/DrawerContext';

const AppLayout = ({children}: IHomePage) => {
  const contentWrapperMarkup = <div className="Pin-Wrapper__Content">{children}</div>;
  return (
    <DrawerContextProvider>
      <div className="Pin-Wrapper">
        <TopBar />
        {contentWrapperMarkup}
      </div>
    </DrawerContextProvider>
  );
};

export default AppLayout;
