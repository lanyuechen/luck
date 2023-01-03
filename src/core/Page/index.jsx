import components from '@/components';

const Page = (props) => {
  const spec = Array.isArray(props.spec) ? props.spec : [props.spec];

  return (
    <>
      {spec.map((d, i) => {
        const C = d.type === 'Page' ? Page : (components[d.type] || components.Null);

        return (
          <C 
            {...(d.props || {})}  
            key={i}
            spec={d.spec}
          />
        );
      })}
    </>
  );
}

export default Page;