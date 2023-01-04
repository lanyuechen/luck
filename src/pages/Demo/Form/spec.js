export default [
  {
    key: 'type',
    type: 'Select',
    label: 'Type',
    props: {
      placeholder: '请选择Type',
      options: [
        { key: 'pod', label: 'Pod' },
        { key: 'node', label: 'Node' },
        { key: 'deployment', label: 'Deployment' },
      ]
    },
  },
  {
    key: 'metadata.name',
    type: 'Input',
    label: 'Name',
    value: '',
    rules: {
      validateLevel: 'error',
      validator: (value) => value || Promise.reject('请输入Name'),
    },
    props: {
      placeholder: '请输入Name',
    },
  },
  {
    key: 'metadata.age',
    type: 'Number',
    label: 'Age',
    value: '',
    rules: {
      hidden: (values) => values.type === 'pod',
    },
    props: {
      placeholder: '请输入Age',
    },
  },
  {
    key: 'metadata.height',
    type: 'Number',
    label: 'Height',
    value: '',
    rules: {
      hidden: (values) => values.type === 'pod',
    },
    props: {
      placeholder: '请输入Height',
    },
  },
  {
    key: 'custom',
    type: 'Custom',
    label: 'Hoby',
    value: '',
    spec: [
      {
        key: 'test',
        type: 'Input',
        label: 'Custom.Input',
        rules: {
          disabled: (values) => values.type === 'pod',
        },
      },
    ],
  },
];
