import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = process.env.REACT_APP_API_URL;

// get all gear
export const getAllGear = async () => {
  return await axios.get(`${apiUrl}/gear`);
};

// get gear by id
export const getGearById = async (id) => {
  return await axios.get(`${apiUrl}/gear/item/${id}`);
};

// create gear
export const createGear = async (newGear) => {
  const res = await axios.post(`${apiUrl}/gear/item`, newGear);
  toast.success(`${newGear.model} Added`, {
    theme: "dark",
  });
  return res;
};

// update gear
export const updateGear = async (id, updatedGear) => {
  const res = await axios.put(`${apiUrl}/gear/item/${id}`, updatedGear);
  toast.success(`${updatedGear.model} Successfully Updated`, {
    theme: "dark",
  });
  return res;
};

// delete gear
export const deleteGear = async (id) => {
  const res = await axios.delete(`${apiUrl}/gear/item/${id}`);
  toast.success(`Successfully Deleted`, {
    theme: "dark",
  });
  return res;
};
