import { Route, Routes } from "react-router";
import NotFound from "../pages/notFound";
import { ProtectedRoute } from "./protected-route";
import AuthUserProfile from "../pages/authPageProfile";
import UserProfile from "../pages/profilePage";
import MessagesUI from "../pages/messagesPage";
import MessagesInBox from "../pages/messagesInBox";
import Friends from "../pages/friendsPage";
import Main from "../pages/MainPage";
import Auth from "../pages/AuthPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="users">
        <Route path=":id" element={<UserProfile />} />
      </Route>
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<AuthUserProfile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/messages" element={<MessagesInBox />} />
        <Route path="/message/:id" element={<MessagesUI />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route />
    </Routes>
  );
};

export default AppRoutes;
