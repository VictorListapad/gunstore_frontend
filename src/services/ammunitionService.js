import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = process.env.REACT_APP_API_URL;
// get all ammunition
export const getAllAmmunition = async () => {
  return await axios.get(`${apiUrl}/ammunition`);
};
