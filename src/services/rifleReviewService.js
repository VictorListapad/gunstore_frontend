import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = process.env.REACT_APP_API_URL;

// GET ALL REVIEWS FOR SPECIFIC RIFLE
export const getReviewsForRifle = async (id) => {
  return await axios.get(`${apiUrl}/rifleReviews/rifle/${id}`);
};

// GET RIFLE REVIEW BY ID
export const getRifleReviewById = async (id) => {
  return await axios.get(`${apiUrl}/rifleReviews/rifleReview/${id}`);
};

// CREATE RIFLE REVIEW
export const createRifleReview = async (review) => {
  try {
    const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
    review.author = user._id;
    review.date = new Date().toLocaleDateString();
    const res = await axios.post(`${apiUrl}/rifleReviews/rifleReview`, review);
    toast.success(`Thank you for your feedback`, {
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

// UPDATE RIFLE REVIEW
export const updateRifleReview = async (review) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (user && user._id === review.author._id) {
    try {
      const res = await axios.put(
        `${apiUrl}/rifleReviews/rifleReview/${review._id}`,
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

// DELETE RIFLE REVIEW
export const deleteRifleReview = async (review) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (
    user._id === review.author._id ||
    user.role === "ADMIN" ||
    user.role === "MODERATOR"
  ) {
    try {
      const res = await axios.delete(
        `${apiUrl}/rifleReviews/rifleReview/${review._id}`
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
