import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import { ProtectedRoute } from "./components/protected-route";
import AuthUserProfile from "./pages/AuthUserProfile";
import UserProfile from "./pages/ProfilePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="users">
        <Route path=":id" element={<UserProfile />} />
      </Route>
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<AuthUserProfile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route />
    </Routes>
  );
};

export default AppRoutes;
