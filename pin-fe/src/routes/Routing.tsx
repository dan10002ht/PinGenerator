import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import defaultRoutes, {noLayoutRoutes} from './defaultRoutes';
import AppLayout from '../layouts/AppLayout/AppLayout';

const Routing = ({prefix = ''}) => {
  const routeGroups = defaultRoutes;

  return (
    <Router>
      <Routes>
        <Route
          element={
            <AppLayout>
              <Outlet />
            </AppLayout>
          }
        >
          {routeGroups.map((group, index) => (
            <Route key={index} path={`${prefix}${group.path}`} Component={group.component as any} />
          ))}
        </Route>
        <Route>
          {noLayoutRoutes.map((group, index) => (
            <Route key={index} path={`${prefix}${group.path}`} Component={group.component as any} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
