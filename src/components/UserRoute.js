import { Outlet } from "react-router";
import { isAuthenticated } from "../services/authService";
import SignInView from "../views/Auth/SignInView";

const UserRoute = () => {
  const user = isAuthenticated();
  return user ? <Outlet /> : <SignInView />;
};

export default UserRoute;
