import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import pages from '@/pages';
import routes from './routes';

const NotFound = pages.NotFound;

const renderRoutes = (routes) => {
  if (!routes?.length) {
    return null
  }
  return routes.map(d => {
    const C = pages[d.component]
    return (
      <Route key={d.path} path={d.path} element={<C />}>
        {renderRoutes(d.routes)}
        <Route path="*" element={<NotFound />} />
      </Route>
    );
  });
}

export default () => {
  return (
    <Router>
      <Routes>
        {renderRoutes(routes)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
