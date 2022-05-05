import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = process.env.REACT_APP_API_URL;

export const getReviewsForGear = async (id) => {
  const res = await axios.get(`${apiUrl}/gearReviews/item/${id}`);
  return res;
};

export const createGearReview = async (review) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  review.author = user._id;
  try {
    const res = await axios.post(`${apiUrl}/gearReviews/gearReview`, review);
    toast.success(`Review added`, {
      theme: "dark",
    });
    return res;
  } catch (error) {
    toast.error(`You have already reviewed this product`, {
      theme: "dark",
    });
    return;
  }
};
