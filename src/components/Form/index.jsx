import { createContext, useContext } from 'react';
import _ from 'lodash';
import Layout from './Layout';
import Custom from './Custom';

const ValueContext = createContext(null);

const Form = (props) => {
  const { spec, value, onChange, ...otherProps } = props;

  return (
    <ValueContext.Provider value={value}>
      <Layout>
        <Custom spec={spec} value={value} onChange={onChange} {...otherProps} />
      </Layout>
    </ValueContext.Provider>
  );
}

Form.parseValue = Custom.parseValue;
Form.useValue = () => {
  return useContext(ValueContext);
};

export default Form;