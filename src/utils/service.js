import _ from 'lodash';
import request from '@/utils/request';

const parseK8sUrl = (cluster, resource, config) => {
  const { group, version = 'v1', namespace } = config;
  const prefix = `/k8s/clusters/${cluster}/proxy`;
  const base = group ? `/apis/${group}/${version}` : '/api/v1';
  const nsUrl = namespace ? `/namespaces/${namespace}` : ''
  return `${prefix}${base}${nsUrl}/${resource}`;
}

const parseUrl = (resource, config) => {
  const { version = 'v1' } = config;
  return `/ucp/${version}/${resource}`;
}

export const getCaptcha = () => {
  return request({
    url: '/ucp/captcha_img',
    params: {
      type: 'number', // number, alphabet, arithmetic, numberalphabet
      width: 80,
      height: 36,
    },
  });
}

export default (cluster) => (resource, config = {}) => {
  const dataIndex = cluster ? 'items' : 'data';

  const getUrl = (cfg = {}) => {
    cfg = { ...config, ...cfg};
    return cluster ? parseK8sUrl(cluster, resource, cfg) : parseUrl(resource, cfg);
  }

  const getFilterParams = (cfg = {}) => {
    return cfg.filterParams || config.filterParams || {};
  }

  const list = async (params = {}, cfg) => {
    const url = getUrl(cfg);
    const filterParams = getFilterParams(cfg);
    params = {
      order: 'desc',
      sort: 'created',
      // sortBy: 'metadata.creationTimestamp',
      ...filterParams,
      ...params,
    };
    const res = await request({
      url,
      params,
    });
    let items = (res[dataIndex] || []).map(d => ({
      ...d,
      id: d.id || d.metadata.name,
    }));
    if (params.sortBy) {
      items = _.sortBy(items, (d) => _.get(d, params.sortBy));
      if (params.order === 'desc') {
        items = items.reverse();
      }
    }
    return {
      ...res,
      items,
      data: items,
    }
  }

  const detail = (id, params, cfg) => {
    const url = getUrl(cfg);
    return request({
      url: `${url}/${id}`,
      params: {
        quiet: params?.quiet,
      }
    });
  }

  const create = (data, cfg) => {
    const url = getUrl(cfg);
    return request({
      url,
      method: 'post',
      data,
    });
  }

  const update = (id, data, cfg) => {
    const url = getUrl(cfg);
    return request({
      url: `${url}/${id}`,
      method: 'put',
      data,
    });
  }

  const patch = (id, data, cfg) => {
    const url = getUrl(cfg);
    return request({
      url: `${url}/${id}`,
      method: 'patch',
      data,
      headers: {
        'Content-Type': 'application/merge-patch+json',
      },
    });
  }

  const patchJson = (id, data, cfg) => {
    const url = getUrl(cfg);
    return request({
      url: `${url}/${id}`,
      method: 'patch',
      data,
      headers: {
        'Content-Type': 'application/json-patch+json',
      },
    });
  }

  const remove = (id, params, cfg) => {
    const url = getUrl(cfg);
    return request({
      url: `${url}/${id}`,
      method: 'delete',
    });
  }

  const upload = (id, file, cfg) => {
    const url = getUrl(cfg);
    const formData = new FormData();
    formData.append("file", file);
    
    return request({
      url: `${url}/${id}`,
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: {
        action: 'uploadFile',
      },
      data: formData,
      onUploadProgress: (progressEvent) => {
        const percent = Math.round( progressEvent.loaded / progressEvent.total * 100 );
        console.log(`[uploaded] ${percent}%`)
      }
    });
  }

  return {
    list,
    update,
    patch,
    patchJson,
    create,
    detail,
    remove,
    upload,
    request: (subUrl, params, cfg) => {
      const url = getUrl(cfg);
      if (typeof subUrl !== 'string') {
        params = subUrl;
        subUrl = params.url;
      }

      return request({
        ...params,
        url: `${url}${subUrl || ''}`,
      })
    },
  }
}
