import { useState } from 'react';
import { Grid } from '@arco-design/web-react';
import Form from '@/components/Form';
import spec from './spec';

export default () => {
  const [value, setValue] = useState(Form.parseValue(spec))

  return (
    <div style={{ padding: 24 }}>
      <Grid.Row gutter={24}>
        <Grid.Col span={8} style={{height: '100vh', overflow: 'auto'}}>
          <pre>
            {JSON.stringify(spec, undefined, 2)}
          </pre>
        </Grid.Col>
        <Grid.Col span={16}>
          <Form
            spec={spec}
            value={value}
            onChange={(val) => setValue(val)}
          />
          <pre>
            {JSON.stringify(value, undefined, 2)}
          </pre>
        </Grid.Col>
      </Grid.Row>
    </div>
  );
};
