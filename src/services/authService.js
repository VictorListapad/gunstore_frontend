import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = process.env.REACT_APP_API_URL;
const jwtString = `smokeandbarrels`;

// signin user
export const signinUser = async (userObj) => {
  const res = await axios.post(`${apiUrl}/auth/signin`, userObj);
  const { user, token } = res.data;
  const { email, ...userStored } = user;
  localStorage.setItem(jwtString, JSON.stringify({ user: userStored, token }));
  return res;
};

// signup user
export const signupUser = async (userObj) => {
  const res = await axios.post(`${apiUrl}/auth/signup`, userObj);
  toast.success(`Successfully Registered!`, {
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

// get all users
export const getAllUsers = async () => {
  return await axios.get(`${apiUrl}/auth`);
};

// delete user
export const deleteUser = async (id) => {
  const res = await axios.delete(`${apiUrl}/auth/user/${id}`);
  toast.success(`Successfully Deleted`, {
    theme: "dark",
  });
  return res;
};
// get user by id
export const getUserById = async (id) => {
  return await axios.get(`${apiUrl}/auth/user/${id}`);
};
// update user
export const updateUser = async (user, id) => {
  const res = await axios.put(`${apiUrl}/auth/user/${id}`, user);
  toast.success(`Successfully Updated`, {
    theme: "dark",
  });
  return res;
};
