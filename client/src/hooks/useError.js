import { useState } from "react";

const useError = () => {
  const [error, setError] = useState("");

  const closeError = () => setError(null);
  const catchError = (errorMessage) => setError(errorMessage);

  return {
    error,
    closeError,
    catchError,
  };
};

export default useError;
