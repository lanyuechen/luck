import menus from './menus';

export default {
  type: 'Layout',
  spec: [
    { type: 'Header' },
    {
      type: 'Sider',
      props: {
        menus,
      }
    },
    {
      type: 'Page',
      spec: [],
    },
    { type: 'Footer' },
  ]
}