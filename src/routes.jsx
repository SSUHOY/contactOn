import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import Profile from "./pages/ProfilePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/user" element={<Profile />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="*" element={<NotFound />} />
      <Route />
    </Routes>
  );
};

export default AppRoutes;
