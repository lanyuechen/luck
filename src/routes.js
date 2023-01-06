export default [
  {
    label: 'Login',
    path: '/login',
    component: 'Login',
  },
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
      },
      {
        label: 'ListPage',
        path: '/demo/list-page',
        component: 'demo.ListPage',
      }
    ]
  }
];
