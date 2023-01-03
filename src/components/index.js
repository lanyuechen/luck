const components  = import.meta.globEager('./*/index.jsx');

const res = {};

for(const [key, value] of Object.entries(components)) {
  console.log('===', key, value)
  const name = key.split('/')[1];
  if (name) {
    res[name] = value.default;
  }
}

export default res;