import axios from 'axios';
import { Message } from '@arco-design/web-react';

// axios.defaults.baseURL = '/ucp/v1'；

const pendingRequests = [];
const pending = {};

// 取消请求操作
const removePendingRequests = () => {
  pendingRequests.forEach((fn) => {
    fn('路由切换，取消所有请求！');
  });
  pendingRequests.splice(0);
};

// 取消同一个重复的ajax请求
const removePending = (key, isRequest = false) => {
  if (pending[key] && isRequest) {
    pending[key]('重新发送请求，取消上一次相同请求！');
  }
  delete pending[key];
};

axios.interceptors.request.use(
  config => {
    // 添加认证Header
    config.headers.Authorization = `Bearer ${localStorage.token}`;
    config.headers['Impersonate-User'] = localStorage.userId;

    // todo 移除
    if (config.url.includes('/k8s')) {
      config.headers['Impersonate-User'] = '';
    }

    // 统计接口跳过
    if (config.url === '/ucp/v1/trackConfigs/track') {
      return config;
    }

    // 在请求发送前执行一下取消操作，防止连续点击重复发送请求(例如连续点击2次按钮)
    let reqData = '';
    // 处理如url相同请求参数不同时上一个请求被屏蔽的情况
    if (config.method === 'get') {
      reqData = config.url + config.method + JSON.stringify(config.params);
    } else {
      reqData = config.url + config.method + JSON.stringify(config.data);
    }
    // 如果用户连续点击某个按钮会发起多个相同的请求，可以在这里进行拦截请求并取消上一个重复的请求
    // removePending(reqData, true);
    // 设置请求的 cancelToken（设置后就能中途控制取消了）
    config.cancelToken = new axios.CancelToken((c) => {
      pending[reqData] = c;
      pendingRequests.push(c);
    });

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    if (axios.isCancel(err)) {
      return Promise.reject(err);
    }

    if (!err.response) {
      return Promise.reject(err);
    }

    // 统计接口跳过
    if (err.response.config.url === '/ucp/v1/trackConfigs/track') {
      return Promise.reject(err);
    }

    // 静默访问，不报错
    if (err.response.config.params?.quiet) {
      return Promise.reject(err);
    }

    const { status } = err.response;

    if (
      status === 401 
      && err.response.config.url !== '/ucp/v1public/localProviders/local'
    ) {
      const redirect = window.location.href;
      sessionStorage.redirect = redirect;
      window.location.href = `/login?redirect=${encodeURIComponent(redirect)}`;
    } else {
      let errText = err.response.statusText || '未知错误';
      if (typeof err.response.data === 'string') {
        errText = err.response.data;
      } else if (err.response.data?.message) {
        errText = err.response.data?.message;
      }
      Message.error(errText);
    }

    return Promise.reject(err);
  }
);

// 取消所有请求的函数
export const cancelAllRequests = () => {
  removePendingRequests();
};

export default async (options) => {
  const res = await axios(options);
  return res.data;
}

