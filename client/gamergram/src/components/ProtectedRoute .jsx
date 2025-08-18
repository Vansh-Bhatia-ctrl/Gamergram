import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const ProtectedRoute = ({ children }) => {
  const token = useAuthStore((state) => state.token);
  const getToken = useAuthStore((state) => state.getToken);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      getToken();
      setIsLoading(false);
    };

    checkAuth();
  }, [getToken]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
