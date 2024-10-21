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
    baseURL: 'http://localhost:4000/api',
    timeout: 60000,
  },
}: {
  url: string;
  data?: object;
  method?: string;
  params?: object;
  options?: object;
  clientConfig?: object;
}) {
  const client = axios.create(clientConfig);
  //   const idToken = await auth.currentUser.getIdToken(false);
  return client
    .request({
      ...options,
      headers: {
        accept: 'application/json',
        ...(options.headers || {}),
        // "X-Auth-Token": idToken,
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
  return async (uri: string, options: object = {}) => {
    return fetchFunction({
      url: uri,
      data: options.body,
      method: options.method,
    });
  };
};

export const fetchAuthenticatedApi = getAuthenticatedFetchApi();
