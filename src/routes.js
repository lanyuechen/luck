export default [
  {
    label: 'Demo',
    path: '/demo',
    component: 'Index',
    routes: [
      {
        label: 'Form',
        path: '/demo/form',
        component: 'FormDemo'
      },
      {
        label: 'Table',
        path: '/demo/table',
        component: 'TableDemo'
      }
    ]
  }
];
