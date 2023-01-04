import routes from '@/routes';

export default {
  type: 'Layout',
  props: {
    direction: 'row',
  },
  spec: [
    {
      type: 'LayoutSider',
      spec: {
        type: 'Sider',
        props: {
          routes,
        },
      }
    },
    {
      type: 'Layout',
      spec: [
        {
          type: 'LayoutHeader',
          spec: {
            type: 'Empty',
          },
        },
        {
          type: 'LayoutContent',
          spec: {
            type: 'Outlet',
          },
        },
        {
          type: 'LayoutFooter',
          spec: {
            type: 'Empty',
          },
        },
      ]
    }
  ],
}