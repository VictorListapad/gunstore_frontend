import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

// get all rifles
export const getAllRifles = async () => {
  return await axios.get(`${apiUrl}/rifles`);
};

// get rifle by id
export const getRifleById = async (id) => {
  return await axios.get(`${apiUrl}/rifles/rifle/${id}`);
};
