import axios from 'axios';

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

  const requestProps = {
    ...options,
    headers: {
      accept: 'application/json',
      ...(options.headers || {}),
    },
    url,
    method,
    data,
    params,
  }

  console.log({requestProps});
  
  
  return client
    .request(requestProps)
    .then((res) => res.data);
}

const getAuthenticatedFetchApi = () => {
  const fetchFunction = api;
  return (uri: string, options: {body?: any; method?: string} = {}) => 
    fetchFunction({
      url: uri,
      data: options.body,
      method: options.method,
    });

};

export const fetchAuthenticatedApi = getAuthenticatedFetchApi();
