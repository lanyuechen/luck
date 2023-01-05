import { Layout } from '@arco-design/web-react';
import Page from '@/components/Page';

export default (props) => {
  const { spec } = props;

  return (
    <Layout.Footer>
      <Page spec={spec} />
    </Layout.Footer>
  );
}
