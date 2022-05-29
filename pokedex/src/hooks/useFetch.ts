import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import api from '../services/api'

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api.get(url, options)
      .then(response => {
        console.log(response)
        setData(response.data);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      })
  }, [])

  return {data, isFetching, error}
}