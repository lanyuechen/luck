import _ from 'lodash';
import Layout from './Layout';
import Custom from './Custom';

const Form = (props) => {
  return (
    <Layout>
      <Custom {...props} />
    </Layout>
  );
}

Form.parseValue = Custom.parseValue;

export default Form;