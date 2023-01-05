import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page from '@/core/Page';
import NotFound from '@/components/NotFound';
import pages from '@/pages';
import routes from './routes';

const renderRoutes = (routes) => {
  if (!routes?.length) {
    return null
  }
  return routes.map(d => {
    const spec = pages[d.component];
    return (
      <Route key={d.path} path={d.path} element={<Page spec={spec} />}>
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
