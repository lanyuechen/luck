import routes from './routes';

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
      type: 'Input',
      spec: [],
    },
    { type: 'Footer' },
  ]
}