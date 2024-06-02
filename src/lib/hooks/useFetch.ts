import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { GreeveApi } from "@/lib/axios";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
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

const useFetch = <T>(params: string, options: unknown): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
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

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
};

export default useFetch;