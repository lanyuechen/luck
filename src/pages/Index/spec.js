import routes from '@/routes';

export default {
  type: 'Layout',
  spec: [
    {
      type: 'Sider',
      props: {
        routes,
      }
    },
    { type: 'Header' },
    {
      type: 'Outlet',
    },
    { type: 'Footer' },
  ]
}