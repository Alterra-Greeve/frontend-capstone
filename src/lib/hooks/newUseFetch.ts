import { AxiosError } from "axios";
import { useState } from "react";
import { GreeveApi } from "@/lib/axios";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  fetchData: (params: string, options: object) => Promise<void>;
}

/**
 *
 * Hooks for fetching data from the API
 * Cara Pakai:
 * di component cukup panggil seperti ini:
 * const { loading, error, data } = useFetch("products", { method: 'get' });
 * ndak perlu lagi masukin headers authorization karena sudah dihandle di axios interceptor
 *
 */

const NewUseFetch = <T>(): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (params: string, options: object): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await GreeveApi(params, options || {});
      setData(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error);
      } else {
        setError(new Error("An unknown error occurred"));
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default NewUseFetch;
