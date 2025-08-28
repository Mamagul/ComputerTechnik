import { useState } from "react";
import axios from "axios";

export const useCatalogRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

  const sendCatalogRequest = async (email, category) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        `${baseUrl}/send-mail/`,
        {
          email: email.trim(),
          category: category,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSuccess(true);

      // Автоматически скрыть success сообщение через 3 секунды
      setTimeout(() => {
        setSuccess(false);
      }, 3000);

      return response.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.error ||
        err.response?.data?.email?.[0] ||
        "Failed to send catalog";
      setError(errorMessage);

      // Автоматически скрыть error сообщение через 5 секунд
      setTimeout(() => {
        setError(null);
      }, 5000);

      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(false);
    setIsLoading(false);
  };

  return {
    sendCatalogRequest,
    isLoading,
    error,
    success,
    reset,
  };
};
