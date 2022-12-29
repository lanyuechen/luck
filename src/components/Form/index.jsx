import { Form } from '@arco-design/web-react';
import _ from 'lodash';
import { immerUpdate } from '@/utils/utils';

const components  = import.meta.globEager('./fields/*.jsx');

const fields = {};
for(const [key, value] of Object.entries(components)) {
  const name = key.split('/').pop().split('.')[0];
  if (name) {
    fields[name] = value.default;
  }
}

const LuckForm = (props) => {
  const { spec, value, onChange } = props;

  const handleChange = (path, val) => {
    if (!path) {
      return onChange(val)
    }
    const newValue = immerUpdate(value, path, val);
    onChange(newValue);
  }

  return spec.map(d => {
    const C = d.type === 'Custom' ? LuckForm : (fields[d.type] || fields.Input);

    return (
      <Form.Item key={d.key || 'empty'} label={d.label || d.key}>
        <C
          {...(d.props || {})}
          spec={d.spec} // Custom(Form.index)/List组件/Map组件
          value={d.key ? _.get(value, d.key) : value}
          onChange={(val) => handleChange(d.key, val)}
        />
      </Form.Item>
    )
  });
}

LuckForm.parseValue = (spec) => {
  const value = {};
  for (const d of spec) {
    if (d.type === 'Custom') {
      if (!d.key) {
        return LuckForm.parseValue(d.spec);
      }
      _.set(value, d.key, LuckForm.parseValue(d.spec));
    } else {
      if (!d.key) {
        return d.value;
      }
      _.set(value, d.key, d.value);
    }
  }
  return value;
}

export default LuckForm;