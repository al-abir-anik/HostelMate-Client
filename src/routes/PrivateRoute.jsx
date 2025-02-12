import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div>
        <div className="min-h-screen pb-20 flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/logIn"}></Navigate>;
};

export default PrivateRoute;
