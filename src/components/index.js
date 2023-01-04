import * as arcoComponents from '@arco-design/web-react';
import { Outlet } from 'react-router-dom';

const components  = import.meta.globEager('./**/index.jsx');

const res = {
  ...arcoComponents,
  Outlet,
};

for(const [key, value] of Object.entries(components)) {
  const name = key.split('/').slice(1, -1).join('.');
  if (name) {
    res[name] = value.default;
  }
}

export default res;