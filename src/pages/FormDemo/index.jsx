import { useState } from 'react';
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
    </>
  );
}
