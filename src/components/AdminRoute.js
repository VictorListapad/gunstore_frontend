import { Outlet } from "react-router";
import { isAuthenticated } from "../services/authService";
import SignInView from "../views/Auth/SignInView";

const AdminRoute = () => {
  const user = isAuthenticated();
  return user.role === "ADMIN" ? <Outlet /> : <SignInView />;
};

export default AdminRoute;
