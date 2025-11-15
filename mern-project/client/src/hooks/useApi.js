import { useState, useEffect } from "react";

export default function useApi(apiFunc, immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const execute = async (...params) => {
    try {
      setLoading(true);
      const response = await apiFunc(...params);
      setData(response);
      setError(null);
      return response;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) execute();
  }, []);

  return { data, loading, error, execute };
}
