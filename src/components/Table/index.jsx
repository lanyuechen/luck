import React, { useState } from 'react';
import { Table } from '@arco-design/web-react';

export default (props) => {
  const { columns, data, loading } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  return (
    <Table
      rowKey="id"
      columns={columns}
      data={data}
      loading={loading}
      stripe
      rowSelection={{
        type: 'checkbox',
        selectedRowKeys,
        onChange: setSelectedRowKeys,
      }}
      pagination={{
        showTotal: true,
        sizeCanChange: true,
      }}
    />
  );
}