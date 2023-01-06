import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from '@/utils/auth';
import NotFound from '@/components/NotFound';
import pages from '@/pages';
import routes from './routes';

const renderRoutes = (routes) => {
  if (!routes?.length) {
    return null
  }
  return routes.map(d => {
    const C = pages[d.component] || NotFound;
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
    <AuthProvider>
      <Router>
        <Routes>
          {renderRoutes(routes)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
