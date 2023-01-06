import React, { useState, useContext, memo } from 'react';
import request from '@/utils/request';
import SERVICE from '@/utils/service';

const AuthContext = React.createContext({});
const AuthFnContext = React.createContext(() => {});

const handleLoginSuccess = async (setAuth) => {
  try {
    const res = await SERVICE()('users').request({
      method: 'post',
      params: {
        action: 'currentpermissions',
      },
    });

    const totp = await SERVICE()('users').request({
      method: 'post',
      params: {
        action: 'totp',
      },
    });

    setAuth({
      role: res.permissions.globalRole,
      permissions: res.permissions,
      totpImg: totp.totpImg,
      totpKey: totp.totpKey,
    });
  } catch(err) {
    setAuth({
      role: 'admin',
      permissions: {
        globalRole: 'admin',
      },
    });
  }
}

const handleLogin = async (params, setAuth) => {
  const { captcha_key, captcha_value, mfa, ...otherParams } = params;
  const url = '/ucp/v1public/localProviders/local';
  let captchaParams = {};
  if (mfa) {
    captchaParams = { mfa: captcha_value };
  } else {
    captchaParams = { captcha_key, captcha_value };
  }
  const res = await request({
    url,
    method: 'post',
    params: {
      action: 'login',
      ...captchaParams,
    },
    data: {
      ...otherParams,
      ttl: 57600000,
    },
  });

  setAuth({
    token: res.name,
    userId: res.userId,
    userName: res.displayName,
  });

  return handleLoginSuccess(setAuth);
}

const handleLogout = async (setAuth) => {
  await request({
    url: '/ucp/v1/token',
    method: 'post',
    params: { action: 'logout' },
  });

  setAuth({
    token: '',
    role: '',
    userId: '',
    userName: '',
    permissions: '',
    totpImg: '',
    totpKey: '',
  });
}

export const useAuth = () => {
  const auth = useContext(AuthContext);
  const setContextAuth = useContext(AuthFnContext);

  const setAuth = (params = {}) => {
    Object.entries(params).forEach(([k, v]) => {
      if (!v && v !== false) {
        localStorage.removeItem(k);
      } else {
        localStorage[k] = typeof v === 'string' ? v : JSON.stringify(v);
      }
    });
    setContextAuth(auth => ({
      ...auth,
      ...params,
    }));
  }

  const login = (params) => handleLogin(params, setAuth);

  const logout = () => handleLogout(setAuth);

  return [
    auth,
    {
      setAuth,
      login,
      logout,
    }
  ];
}

export const AuthProvider = memo((props) => {
  const { children } = props;

  const [auth, setAuth] = useState({
    token: localStorage.token,
    role: localStorage.role,
    userId: localStorage.userId,
    userName: localStorage.userName,
    permissions: JSON.parse(localStorage.permissions || '{}')
  });

  console.log('====authProvider', auth);

  return (
    <AuthContext.Provider value={auth}>
      <AuthFnContext.Provider value={setAuth}>
        {children}
      </AuthFnContext.Provider>
    </AuthContext.Provider>
  );
});
