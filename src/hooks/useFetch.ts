import { useEffect, useState } from "react";

type ApiResponse<T> = [
  error: boolean,
  apiData?: T,
  setUrl?: React.Dispatch<React.SetStateAction<string | undefined>>
];
const useFetch = <T>(urlParam?: string): ApiResponse<T> => {
  const [apiData, setApiData] = useState<T>();
  const [error, setError] = useState(false);
  const [url, setUrl] = useState(urlParam);

  useEffect(() => {
    const abortController = new AbortController();
    //💡 making sure to call api with url
    if (!url) return;
    const fetchData = async () => {
      try {
        const resp = await fetch(url, { signal: abortController.signal });
        const data = await resp.json();
        setApiData(data);
        setError(false);
      } catch (error: any) {
        if (error.name !== "AbortError") {
          setError(true);
          console.error(error);
        }
        // finally {
        //   setLoading(false);
        // }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, error]);

  return [error, apiData, setUrl];
};

export default useFetch;
