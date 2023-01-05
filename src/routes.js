export default [
  {
    label: 'Demo',
    path: '/demo',
    component: 'Index',
    routes: [
      {
        label: 'Form',
        path: '/demo/form',
        component: 'demo.Form',
      },
      {
        label: 'Table',
        path: '/demo/table',
        component: 'demo.Table',
      }
    ]
  }
];
