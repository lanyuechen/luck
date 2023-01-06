import { wait } from '@/utils/utils';
import SERVICE from '@/utils/service';

export default {
  type: 'ListPage',
  props: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'metadata.name',
      },
      {
        title: '创建时间',
        dataIndex: 'metadata.creationTimestamp',
      }
    ],
    service: SERVICE('local')('namespaces'),
  },
};
