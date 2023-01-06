import Page from '@/core/Page';

const specs  = import.meta.globEager('./**/index.js');
const components  = import.meta.globEager('./**/index.jsx');

const res = {};

for(const [key, value] of Object.entries(specs)) {
  const name = key.split('/').slice(1, -1).join('.');
  if (name) {
    res[name] = () => Page.createElement({ spec: value.default });
  }
}

for(const [key, value] of Object.entries(components)) {
  const name = key.split('/').slice(1, -1).join('.');
  if (name) {
    res[name] = value.default;
  }
}

export default res;