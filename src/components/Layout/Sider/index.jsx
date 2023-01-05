import { useState } from 'react';
import { Layout } from '@arco-design/web-react';
import Page from '@/core/Page';

const minWidth = 60;
const normalWidth = 256;
const maxWidth = 512;

export default (props) => {
  const { spec } = props;

  const [collapsed, setCollapsed] = useState(false);
  const [siderWidth, setSiderWidth] = useState(normalWidth);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
    setSiderWidth(collapsed ? minWidth : normalWidth);
  }

  const handleMoving = (_, { width }) => {
    if (width < minWidth) {
      setSiderWidth(minWidth);
      setCollapsed(true);
    } else if (width > maxWidth) {
      setSiderWidth(maxWidth);
      setCollapsed(false);
    } else {
      setSiderWidth(width);
      setCollapsed(!(width > minWidth + 20));
    }
  }

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      width={siderWidth}
      resizeBoxProps={{
        directions: ['right'],
        onMoving: handleMoving,
      }}
      style={{
        maxWidth,
      }}
      onCollapse={onCollapse}
    >
      <Page spec={spec} />
    </Layout.Sider>
  );
}
