export default [
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
      hidden: (values) => values.metadata.name === 'haha',
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
      hidden: (values) => values.metadata.name === 'haha',
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
          disabled: (values) => values.metadata.name === 'haha',
        },
      },
    ],
  },
];
