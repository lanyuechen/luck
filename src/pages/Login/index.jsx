import { useEffect, useState } from 'react';
import { Form, Input, Button } from '@arco-design/web-react';
import { useAuth } from '@/utils/auth';
import { getCaptcha } from '@/utils/service';

export default () => {
  const [form] = Form.useForm();
  const [, authActions] = useAuth();
  const [captcha, setCaptcha] = useState({});

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const fetchCaptcha = () => {
    getCaptcha().then(res => {
      setCaptcha(res);
    });
  }

  const handleLogin = async () => {
    const values = await form.validate();
    console.log('===', values)
    try {
      await authActions.login({
        username: values.username,
        password: values.password,
        captcha_value: values.code,
        captcha_key: captcha.key,
      });
      navigate('/demo/list-page');
    } catch(err) {
      fetchCaptcha();
    }
  }

  return (
    <Form form={form} style={{ width: 600 }} autoComplete="off">
      <Form.Item field="username" label="Username" rules={[{required: true}]}>
        <Input placeholder="please enter your username..." />
      </Form.Item>
      <Form.Item field="password" label="Password">
        <Input.Password placeholder="please enter your password..." />
      </Form.Item>
      <Form.Item field="code" label="Captcha">
        <Input
          placeholder="please enter captcha..."
          addAfter={captcha.data && <img src={captcha.data} alt="captcha" />}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 5 }}>
        <Button onClick={handleLogin}>登录</Button>
      </Form.Item>
    </Form>
  );
};
