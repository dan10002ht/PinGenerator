import {useEffect, useState} from 'react';
import {fetchAuthenticatedApi} from '../../helpers/api';
import isEmpty from '../../helpers/isEmpty';
import {IFetchApiProps} from '../../interfaces/network/api.interface.ts';

/**
 *
 * @param url
 * @param defaultData
 * @param initLoad
 * @param presentData
 * @param method
 * @param postData
 */
export default function useFetchApi({
  url,
  defaultData = [],
  initLoad = true,
  presentData = null,
  method = 'GET',
  postData = {},
}: IFetchApiProps) {
  const [loading, setLoading] = useState(initLoad);
  const [data, setData] = useState(defaultData);
  const [pagination, setPagination] = useState({});
  const [errors, setErrors] = useState([]);
  const [fetched, setFetched] = useState(false);

  async function fetchApi() {
    if (url === '') {
      return;
    }
    setLoading(true);
    try {
      const resp =
        method === 'GET'
          ? await fetchAuthenticatedApi(url)
          : await fetchAuthenticatedApi(url, {
              method,
              body: postData,
            });
      if (resp.data) {
        const newData = presentData ? presentData(resp.data) : resp.data;
        if (!isEmpty(defaultData)) {
          setData((prev: any) => {
            return {...prev, ...newData};
          });
        } else {
          setData(newData);
        }
      }
      if (resp.pagination) setPagination(resp.pagination);
      if (resp.errors) {
        setErrors([...errors, resp.errors]);
      }
    } catch (e: any) {
      console.log(e);
      setErrors([...errors, e.message]);
    } finally {
      setLoading(false);
      setFetched(true);
    }
  }

  async function refetch(url: string) {
    if (url === '') {
      return;
    }
    try {
      setLoading(true);
      const resp = await fetchAuthenticatedApi(url);
      if (resp.data) {
        const newData = presentData ? presentData(resp.data) : resp.data;
        if (!isEmpty(defaultData)) {
          setData((prev: any) => {
            return {...prev, ...newData};
          });
        } else {
          setData(newData);
        }

        if (resp.pagination) setPagination(resp.pagination);

        return newData;
      }

      setErrors([...errors, resp.errors]);
    } catch (e) {
      console.log(e);
      setErrors([...errors, e.message]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (initLoad) {
      fetchApi().then(() => {});
    }
  }, []);

  const handleChangeInput = (key: string, value: any) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return {
    loading,
    data,
    setData,
    pagination,
    refetch,
    errors,
    setLoading,
    fetched,
    setErrors,
    handleChangeInput,
  };
}
