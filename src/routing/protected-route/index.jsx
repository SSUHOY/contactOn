import { Navigate, Outlet } from "react-router-dom";
import userStore from "../../store/users";

export const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const users = localStorage.getItem("users");
  if (!userStore.isAuth || !users) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};
