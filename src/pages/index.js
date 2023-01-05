const components  = import.meta.globEager('./**/index.js');

const res = {};

for(const [key, value] of Object.entries(components)) {
  const name = key.split('/').slice(1, -1).join('.');
  if (name) {
    res[name] = value.default;
  }
}

export default res;