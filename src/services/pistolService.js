import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

// get all pistols
export const getAllPistols = async () => {
  return await axios.get(`${apiUrl}/pistols`);
};
