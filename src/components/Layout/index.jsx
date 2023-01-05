import { Layout } from '@arco-design/web-react';
import Page from '@/core/Page';

export default (props) => {
  const { spec, direction = 'column' } = props;

  return (
    <Layout style={{height: '100vh', flexDirection: direction}}>
      <Page spec={spec} />
    </Layout>
  );
}
