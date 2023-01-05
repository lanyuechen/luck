export default {
  type: 'Table',
  props: {
    loading: false,
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
      }
    ],
    data: [
      {id: 1, name: 'xiaoming', age: 12 },
      {id: 2, name: 'xiaohong', age: 21 },
    ],
  }
}