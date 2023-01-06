import { useState } from 'react';
import components from '@/components';

const Page = (props) => {
  const spec = Array.isArray(props.spec) ? props.spec : [props.spec];
  const [store, setStore] = useState({});
  
  if (!spec.length) {
    return null;
  }

  return (
    <>
      {spec.map((d, i) => {
        const C = d.type === 'Page' ? Page : (components[d.type] || components.Null);

        return (
          <C
            {...(d.props || {})}
            key={i}
            spec={d.spec}
            scope={store}
            value={store[d.key] || {}}
            onChange={(value) => {
              setStore({...store, [d.key]: value});
              d.onChange?.(value);
            }}
          />
        );
      })}
    </>
  );
}

Page.createElement = (props) => (
  <Page {...props} />
);

export default Page;