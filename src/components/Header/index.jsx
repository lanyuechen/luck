import { Menu } from '@arco-design/web-react';

export default () => {
  return (
    <div style={{borderBottom: '1px solid #ddd'}}>
      <Menu mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item
          key='0'
          style={{ padding: 0, marginRight: 38, }}
          disabled
        >
          <div
            style={{
              cursor: 'pointer',
              fontSize: '24px',
              fontWeight: 'bolder',
            }}
          >
            Luck
          </div>
        </Menu.Item>
        <Menu.Item key='1'>Home</Menu.Item>
        <Menu.Item key='2'>Solution</Menu.Item>
        <Menu.Item key='3'>Cloud Service</Menu.Item>
        <Menu.Item key='4'>Cooperation</Menu.Item>
      </Menu>
    </div>
  );
}
