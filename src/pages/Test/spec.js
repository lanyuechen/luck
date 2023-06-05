export default [
  {
    key: 'type',
    type: 'Select',
    value: 'default',
    props: {
      placeholder: '请选择类型',
      options: [
        { key: 'default', label: 'default' },
        { key: 'map', label: 'map' },
        { key: 'list:string', label: 'list:string' },
        { key: 'list:map', label: 'list:map' },
      ]
    },
  },
  {
    key: 'name',
    rules: {
      validateLevel: 'error',
      validator: (value) => value || Promise.reject('请输入Name'),
    },
  },
  {
    key: 'metadata.name',
    label: 'metadata.name',
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