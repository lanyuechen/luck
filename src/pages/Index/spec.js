import routes from '@/routes';

export default {
  type: 'Layout',
  props: {
    direction: 'row',
  },
  spec: [
    {
      type: 'Layout.Sider',
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
          type: 'Layout.Header',
          spec: {
            type: 'Empty',
          },
        },
        {
          type: 'Layout.Content',
          spec: {
            type: 'Outlet',
          },
        },
        {
          type: 'Layout.Footer',
          spec: {
            type: 'Empty',
          },
        },
      ]
    }
  ],
}