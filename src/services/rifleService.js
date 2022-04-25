import axios from "axios";
import { toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_API_URL;

// get all rifles
export const getAllRifles = async () => {
  return await axios.get(`${apiUrl}/rifles`);
};

// get rifle by id
export const getRifleById = async (id) => {
  return await axios.get(`${apiUrl}/rifles/rifle/${id}`);
};

// create rifle
export const createRifle = async (newRifle) => {
  const res = await axios.post(`${apiUrl}/rifles/rifle`, newRifle);
  toast.success(`${newRifle.model} Added`, {
    theme: "dark",
  });
  return res;
};

// edit rifle
export const editRifle = async (id, updatedRifle) => {
  const res = await axios.put(`${apiUrl}/rifles/rifle/${id}`, updatedRifle);
  toast.success(`${updatedRifle.model} Successfully Updated`, {
    theme: "dark",
  });
  return res;
};
// delete rifle
export const deleteRifle = async (id) => {
  const res = await axios.delete(`${apiUrl}/rifles/rifle/${id}`);
  toast.error(`Successfully Deleted`, {
    theme: "dark",
  });
  return res;
};
