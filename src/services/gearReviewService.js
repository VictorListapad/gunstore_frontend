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

export const getGearReviewById = async (id) => {
  const res = await axios.get(`${apiUrl}/gearReviews/gearReview/${id}`);
  return res;
};

export const updateGearReview = async (id, review) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (user._id === review.author._id) {
    try {
      const res = await axios.put(
        `${apiUrl}/gearReviews/gearReview/${id}`,
        review
      );
      toast.success(`Review Updated`, {
        theme: "dark",
      });
      return res;
    } catch (error) {
      toast.error(`You have no permit to update this review `, {
        theme: "dark",
      });
      return;
    }
  } else {
    toast.error(`You have no permit to update this review `, {
      theme: "dark",
    });
    return;
  }
};

export const deleteGearReview = async (review) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (
    user._id === review.author._id ||
    user.role === "ADMIN" ||
    user.role === "MODERATOR"
  ) {
    try {
      const res = await axios.delete(
        `${apiUrl}/gearReviews/gearReview/${review._id}`
      );
      toast.success(`Review Deleted`, {
        theme: "dark",
      });
    } catch (error) {
      toast.error(`You have no permit to delete this review `, {
        theme: "dark",
      });
      return;
    }
  } else {
    toast.error(`You have no permit to delete this review `, {
      theme: "dark",
    });
    return;
  }
};
