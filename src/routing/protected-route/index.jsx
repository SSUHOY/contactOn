import { Navigate, Outlet } from "react-router-dom";
import userStore from "../../store/users";

export const ProtectedRoute = ({ redirectPath = "/login" }) => {
  if (!userStore.isAuth) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};
