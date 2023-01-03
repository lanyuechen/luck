import { useState } from 'react';
import { Menu, Input, Affix } from '@arco-design/web-react';
import { IconArchive } from '@arco-design/web-react/icon';

const matchKeyword = (val, keyword) => {
  if (!keyword) {
    return true;
  }
  return val.toLowerCase().includes(keyword.toLowerCase());
}

const renderMenus = (menus, keyword) => {
  return menus.map(menu => {
    const { key, label, children, ...others } = menu;
    if (children?.length) {
      const resultMenus = renderMenus(children, keyword);
      if (!resultMenus.length) {
        return null;
      }
      return (
        <Menu.SubMenu {...others} key={key}
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
      <Menu.Item {...others} key={key}>
        <IconArchive />
        {label}
      </Menu.Item>
    );
  }).filter(menu => menu);
}

export default (props) => {
  const { menus, onClickMenuItem } = props;
  const [keyword, setKeyword] = useState('');

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
        autoOpen
        selectable={false}
        style={{ width: '100%', height: 'calc(100% - 48px)' }}
        onClickMenuItem={onClickMenuItem}
      >
        {renderMenus(menus, keyword)}
      </Menu>
    </div>
  );
}
