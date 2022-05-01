import { Outlet } from "react-router";
import { isAuthenticated } from "../services/authService";
import SignInView from "../views/Auth/SignInView";

const ModeratorRoute = () => {
  const user = isAuthenticated();
  return user.role === "ADMIN" || user.role === "MODERATOR" ? (
    <Outlet />
  ) : (
    <SignInView />
  );
};

export default ModeratorRoute;
