import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = process.env.REACT_APP_API_URL;
// get all ammunition
export const getAllAmmunition = async () => {
  return await axios.get(`${apiUrl}/ammunition`);
};

// get ammunition by id
export const getAmmunitionById = async (id) => {
  return await axios.get(`${apiUrl}/ammunition/ammo/${id}`);
};

// create ammunition
export const createAmmunition = async (newAmmo) => {
  const res = await axios.post(`${apiUrl}/ammunition/ammo`, newAmmo);
  toast.success(`${newAmmo.model}, ${newAmmo.grainWeight} Added`, {
    theme: "dark",
  });
  return res;
};

// update ammunition
export const updateAmmunition = async (id, updatedAmmo) => {
  const res = await axios.put(`${apiUrl}/ammunition/ammo/${id}`, updatedAmmo);
  toast.success(
    `${updatedAmmo.model}, ${updatedAmmo.grainWeight} Gr Successfully Updated`,
    {
      theme: "dark",
    }
  );
  return res;
};

// delete ammunition
export const deleteAmmunition = async (id) => {
  const res = await axios.delete(`${apiUrl}/ammunition/ammo/${id}`);
  toast.error(`Successfully Deleted`, {
    theme: "dark",
  });
  return res;
};
