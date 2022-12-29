import { useState } from 'react';
import { Grid } from '@arco-design/web-react';
import LuckForm from '@/components/Form';

import spec from '@/components/Form/demo.yaml';

export default () => {
  const [value, setValue] = useState(LuckForm.parseValue(spec));

  return (
    <>
      <LuckForm spec={spec} value={value} onChange={(v) => setValue(v)} />
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
