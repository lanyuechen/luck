import { Form } from '@arco-design/web-react';

const Layout = (props) => {
  const { children } = props;

  return (
    <Form autoComplete="off">
      {children}
    </Form>
  );
}

Layout.Item = (props) => {
  const { label, children } = props;

  return (
    <Form.Item label={label} style={{overflow: 'hidden'}}>
      {children}
    </Form.Item>
  );
}

export default Layout;