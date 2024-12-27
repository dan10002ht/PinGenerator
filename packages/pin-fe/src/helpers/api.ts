import axios from 'axios';

/**
 *
 * @param url
 * @param data
 * @param method
 * @param params
 * @param options
 * @param clientConfig
 */
export async function api({
  url,
  data = {},
  method = 'GET',
  params = {},
  options = {},
  clientConfig = {
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    timeout: 60000,
    withCredentials: true,
  },
}: {
  url: string;
  data?: object;
  method?: string;
  params?: object;
  options?: any;
  clientConfig?: object;
}) {
  const client = axios.create(clientConfig);
  return client
    .request({
      ...options,
      headers: {
        accept: 'application/json',
        ...(options.headers || {}),
      },
      url,
      method,
      data,
      params,
    })
    .then((res) => res.data);
}

const getAuthenticatedFetchApi = () => {
  const fetchFunction = api;
  return async (uri: string, options: {body?: any; method?: string} = {}) => {
    return fetchFunction({
      url: uri,
      data: options.body,
      method: options.method,
    });
  };
};

export const fetchAuthenticatedApi = getAuthenticatedFetchApi();
