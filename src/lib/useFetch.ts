import axios from "axios";
import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | string;
  loading: boolean;
  error: Error | null;
}

const useFetch = <T>(params: string, options: any): FetchState<T> => {
  const [data, setData] = useState<T | string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | any>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios(
        `https://api.greeve.store/api/v1${params}`,
        options || {}
      );
      setData(JSON.stringify(response.data));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;

// example

// let token =
//     "eJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdyZWV2ZS5zdG9yZSIsImV4cCI6MTcxOTc1MDQ0NSwiaWF0IjoxNzE3MDcyMDQ1LCJpZCI6IjE2OTMwYzA3LWJkYjUtNDlkMi04YTgxLTMyNTkxODMzMjQxYiIsIm5hbWUiOiJLYXplIFVzZXIiLCJyb2xlIjoiQWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluIn0.bk9ZGJSbunUeR3zYeds2WLWSLGJSslvWIkJktItnsxc";

//   let config = {
//     method: "get",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const { data, error, loading } = useFetch("/admin", config);
//   console.log(error?.message);

// -----------------------------------------------------------------------------------

// let config = {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: {
//       email: "users@kzquandary.my.id",
//       password: "admin",
//     },
//   };

//   const { data, error, loading } = useFetch("/admin/login", config);
//   console.log(data);
