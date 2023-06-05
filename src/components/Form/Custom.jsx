import _ from 'lodash';
import useImmerUpdate from '@/hooks/useImmerUpdate';
import components from './components';
import Layout from './Layout';

const getComponent = (type) => {
  return type === 'Custom' ? Custom : (components[type] || components.Input);
}

const Custom = (props) => {
  const { spec = {}, value, onChange } = props;
  const immerUpdate = useImmerUpdate();

  const handleChange = (path, val) => {
    const newValue = immerUpdate(value || {}, path, val);
    onChange(newValue);
  }

  if (Array.isArray(spec)) {
    return spec.map(d => {
      const C = getComponent(d.type);
      const cProps = (typeof d.props === 'function' ? d.props(value) : d.props) || {};
  
      return (
        <Layout.Item key={d.key} label={d.label || d.key} rules={d.rules}>
          <C
            {...cProps}
            spec={d.spec} // Custom(Form/Custom)/List组件/Map组件
            value={_.get(value, d.key)}
            onChange={(val) => handleChange(d.key, val)}
          />
        </Layout.Item>
      );
    });
  }

  const C = getComponent(spec.type);

  return (
    <Layout.Item label={spec.label} rules={spec.rules}>
      <C
        {...(spec.props || {})}
        spec={spec.spec} // Custom(Form/Custom)/List组件/Map组件
        value={value}
        onChange={(val) => onChange(val)}
      />
    </Layout.Item>
  );
}

Custom.parseValue = (spec) => {
  if (!spec) {
    return '';
  }

  if (Array.isArray(spec)) {
    const value = {};
    for (const d of spec) {
      if (d.type === 'Custom') {
        _.set(value, d.key, Custom.parseValue(d.spec));
      } else {
        _.set(value, d.key, d.value);
      }
    }
    return value;
  }

  if (spec.type === 'Custom') {
    return Custom.parseValue(spec.spec);
  } else {
    return spec.value || '';
  }
}

export default Custom;