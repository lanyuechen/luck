export default [
  {
    key: 'type',
    type: 'Select',
    value: 'default',
    props: {
      options: [
        { key: 'default', label: 'default' },
        { key: 'map', label: 'map' },
        { key: 'list:string', label: 'list:string' },
        { key: 'list:map', label: 'list:map' },
        { key: 'disable name', label: 'disable name' },
        { key: 'hide name', label: 'hide name' },
      ]
    },
  },
  {
    key: 'name',
    props: (values) => {
      return {
        placeholder: `请输入${values.type}的Name`,
      };
    },
    rules: {
      validateLevel: 'error',
      validator: (value) => value || Promise.reject('请输入Name'),
      disabled: (values) => values.type === 'disable name',
      hidden: (values) => values.type === 'hide name',
    },
  },
  {
    key: 'meta.name',
    rules: {
      validateLevel: 'error',
      validator: (value) => value || Promise.reject('请输入Name'),
    },
  },
  {
    key: 'map',
    type: 'Map',
    label: 'map',
    value: '',
    rules: {
      hidden: (values) => values.type !== 'default' && values.type !== 'map',
    },
    spec: [
      {
        key: 'name',
        label: 'name',
      },
    ],
  },
  {
    key: 'list:string',
    type: 'List',
    value: [],
    rules: {
      hidden: (values) => values.type !== 'default' && values.type !== 'list:string',
    },
    spec: {
      rules: {
        validator: (value) => value || Promise.reject('请输入'),
      }
    }
  },
  {
    key: 'list:map',
    type: 'List',
    value: [],
    rules: {
      hidden: (values) => values.type !== 'default' && values.type !== 'list:map',
    },
    spec: [
      {
        key: 'name',
      }
    ]
  },
]