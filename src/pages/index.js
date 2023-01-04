const components  = import.meta.globEager('./*/index.jsx');

const res = {};

for(const [key, value] of Object.entries(components)) {
  const name = key.split('/')[1];
  if (name) {
    res[name] = value.default;
  }
}

export default res;