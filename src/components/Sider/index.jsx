import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Input, Affix } from '@arco-design/web-react';
import { IconArchive } from '@arco-design/web-react/icon';

const matchKeyword = (val, keyword) => {
  if (!keyword) {
    return true;
  }
  return val.toLowerCase().includes(keyword.toLowerCase());
}

const renderMenus = (routes, keyword) => {
  return routes.map(route => {
    const { path, label, routes, ...others } = route;
    if (routes?.length) {
      const resultMenus = renderMenus(routes, keyword);
      if (!resultMenus.length) {
        return null;
      }
      return (
        <Menu.SubMenu {...others} key={path}
          title={
            <span>
              <IconArchive /> {label}
            </span>
          }
        >
          {resultMenus}
        </Menu.SubMenu>
      );
    }
    if (!matchKeyword(label, keyword)) {
      return null;
    }

    return (
      <Menu.Item {...others} key={path}>
        <IconArchive />
        {label}
      </Menu.Item>
    );
  }).filter(menu => menu);
}

export default (props) => {
  const { routes } = props;
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClickMenuItem = (key) => {
    navigate(key);
  }

  return (
    <div style={{height: '100%'}}>
      <Affix>
        <div style={{padding: 8}}>
          <Input.Search
            allowClear
            placeholder="Enter keyword to search"
            onChange={(v) => setKeyword(v)}
          />
        </div>
      </Affix>
      <Menu
        selectedKeys={[pathname]}
        autoOpen
        style={{ width: '100%', height: 'calc(100% - 48px)' }}
        onClickMenuItem={handleClickMenuItem}
      >
        {renderMenus(routes, keyword)}
      </Menu>
    </div>
  );
}
