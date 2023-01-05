import { useEffect, useState } from 'react';
import { Input } from '@arco-design/web-react';
import Table from '@/components/Table';

export default (props) => {
  const { service, columns } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await service.list();
      setData(res.data || []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Input.Search style={{marginBottom: 16}} />
      <Table
        loading={loading}
        columns={columns}
        data={data}
      />
    </>
  );
}