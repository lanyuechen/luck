import { useState } from 'react';
import { Grid } from '@arco-design/web-react';
import Form from '@/core/Form';

import spec from './spec';

export default () => {
  const [value, setValue] = useState(Form.parseValue(spec));

  return (
    <>
      <Form
        spec={spec}
        value={value}
        onChange={(v) => setValue(v)}
      />
      <Grid.Row>
        <Grid.Col span={12}>
          <pre>
            {JSON.stringify(spec, undefined, 2)}
          </pre>
        </Grid.Col>
        <Grid.Col span={12}>
          <pre>
            {JSON.stringify(value, undefined, 2)}
          </pre>
        </Grid.Col>
      </Grid.Row>
      
    </>
  );
}
