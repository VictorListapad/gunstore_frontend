import axios from "axios";
import { toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_API_URL;

// get all pistols
export const getAllPistols = async () => {
  return await axios.get(`${apiUrl}/pistols`);
};

// get pistol by id
export const getPistolById = async (id) => {
  return await axios.get(`${apiUrl}/pistols/pistol/${id}`);
};

// add pistol
export const createPistol = async (newPistol) => {
  const res = await axios.post(`${apiUrl}/pistols/pistol`, newPistol);
  toast.success(`${newPistol.model} Successfully Updated`, {
    theme: "dark",
  });
  return res;
};

// update pistol
export const editPistol = async (id, updatedPistol) => {
  const res = await axios.put(`${apiUrl}/pistols/pistol/${id}`, updatedPistol);
  toast.success(`${updatedPistol.model} Successfully Updated`, {
    theme: "dark",
  });
  return res;
};

// delete pistol
export const deletePistol = async (id) => {
  const res = await axios.delete(`${apiUrl}/pistols/pistol/${id}`);
  toast.error(`Successfully Deleted`, {
    theme: "dark",
  });
  return res;
};
