import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},

        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        setError("request failed");
      }

      const data = await response.json();

      if (data.Status.includes("denied")) {
        setError("Session  Expired , please login again");
      }

      if (data.Status.includes("success")) {
        setError(null);
      }
      applyData(data);
    } catch (err) {}
    setIsLoading(false);
  }, []);

  return {
    isLoading: isLoading,
    Error: error,
    sendRequest: sendRequest,
  };
};
export default useHttp;
