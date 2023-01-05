import { wait } from '@/utils/utils';

export default {
  type: 'ListPage',
  props: {
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
    service: {
      list: async () => {
        await wait(1000);
        return {
          data: [
            { id: 1, name: 'xiaoming', age: 12 },
            { id: 2, name: 'xiaohong', age: 21 },
          ],
        };
      }
    }
  }
}