import { Route, Routes } from "react-router";
import NotFound from "./pages/notFound";
import MainPage from "./pages/mainPage";
import AuthPage from "./pages/AuthPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/user" element={<UserPage />} /> */}
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="*" element={<NotFound />} />
      <Route />
    </Routes>
  );
};

export default AppRoutes;
