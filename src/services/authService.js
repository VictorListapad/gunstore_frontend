import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = process.env.REACT_APP_API_URL;
const jwtString = `smokeandbarrels`;

export const signinUser = async (userObj) => {
  const res = await axios.post(`${apiUrl}/auth/signin`, userObj);
  const { user, token } = res.data;
  const { _id, email, ...userStored } = user;
  localStorage.setItem(jwtString, JSON.stringify({ user: userStored, token }));
  toast.success(`Welcome, ${user.name} !`, {
    theme: "dark",
  });
  return res;
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (!localStorage.getItem(jwtString)) {
    return false;
  }
  const { user } = JSON.parse(localStorage.getItem(jwtString));
  if (user) {
    return user;
  } else {
    return false;
  }
};

export const signoutUser = () => {
  localStorage.removeItem(jwtString);
  window.location.reload();
};
