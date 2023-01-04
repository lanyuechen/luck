import { useState } from 'react';
import Form from '@/core/Form';
import Page from '@/core/Page';

import spec from '@/config';
import formSpec from '@/config/formSpec';

export default () => {
  const [value, setValue] = useState(Form.parseValue(formSpec));

  return (
    <>
      <Page
        spec={spec}
      />
      {/* <Form
        spec={spec}
        value={value}
        onChange={(v) => setValue(v)}
      /> */}
    </>
  );
}
