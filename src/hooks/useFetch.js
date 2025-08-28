import axios from "axios";
import { useState, useEffect } from "react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function useFetch(dataName) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dataUrl = `${baseUrl}/${dataName}/`;

  useEffect(() => {
    axios
      .get(dataUrl)
      .then((res) => {
        const responseData = res.data;
        const actualData = responseData?.results ?? responseData;

        setData(actualData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [dataName]);

  return { data, loading, error };
}
