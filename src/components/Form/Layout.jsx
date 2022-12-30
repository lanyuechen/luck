import { Form } from '@arco-design/web-react';

export default (props) => {
  const { label, children } = props;

  return (
    <Form.Item label={label} style={{overflow: 'hidden'}}>
      {children}
    </Form.Item>
  );
}
