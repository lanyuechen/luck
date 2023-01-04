export default [
  {
    label: 'Demo',
    path: '/demo',
    component: 'Index',
    routes: [
      {
        label: 'Form',
        path: '/demo/form',
        component: 'Demo.Form',
      },
      {
        label: 'Table',
        path: '/demo/table',
        component: 'Demo.Table',
      }
    ]
  }
];
