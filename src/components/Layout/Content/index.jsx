import { Layout } from '@arco-design/web-react';
import Page from '@/core/Page';

export default (props) => {
  const { spec } = props;

  return (
    <Layout.Content style={{padding: 8}}>
      <Page spec={spec} />
    </Layout.Content>
  );
}
