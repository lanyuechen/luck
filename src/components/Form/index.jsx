import _ from 'lodash';
import { immerUpdate } from '@/utils/utils';
import Layout from './Layout';

const components  = import.meta.globEager('./fields/*.jsx');

const fields = {};
for(const [key, value] of Object.entries(components)) {
  const name = key.split('/').pop().split('.')[0];
  if (name) {
    fields[name] = value.default;
  }
}

const getComponent = (type) => {
  return type === 'Custom' ? Form : (fields[type] || fields.Input);
}

const Form = (props) => {
  const { spec, value, onChange } = props;

  const handleChange = (path, val) => {
    const newValue = immerUpdate(value, path, val);
    onChange(newValue);
  }

  if (Array.isArray(spec)) {
    return spec.map(d => {
      const C = getComponent(d.type);
  
      return (
        <Layout key={d.key} label={d.label || d.key}>
          <C
            {...(d.props || {})}
            spec={d.spec} // Custom(Form.index)/List组件/Map组件
            value={_.get(value, d.key)}
            onChange={(val) => handleChange(d.key, val)}
          />
        </Layout>
      );
    });
  }

  const C = getComponent(spec.type);

  return (
    <Layout label={spec.label}>
      <C
        {...(spec.props || {})}
        spec={spec.spec} // Custom(Form.index)/List组件/Map组件
        value={value}
        onChange={(val) => onChange(val)}
      />
    </Layout>
  );
}

Form.parseValue = (spec) => {
  if (Array.isArray(spec)) {
    const value = {};
    for (const d of spec) {
      if (d.type === 'Custom') {
        _.set(value, d.key, Form.parseValue(d.spec));
      } else {
        _.set(value, d.key, d.value);
      }
    }
    return value;
  }

  if (spec.type === 'Custom') {
    return Form.parseValue(spec.spec);
  } else {
    return spec.value;
  }
}

export default Form;