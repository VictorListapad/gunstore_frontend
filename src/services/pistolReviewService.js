import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = process.env.REACT_APP_API_URL;

// GET ALL REVIEWS FOR A SPECIFIC PISTOL
export const getReviewsForPistol = async (id) => {
  return await axios.get(`${apiUrl}/pistolReviews/pistol/${id}`);
};

// GET PISTOL REVIEW BY ID
export const getPistolReviewById = async (id) => {
  return await axios.get(`${apiUrl}/pistolReviews/pistolReview/${id}`);
};

// CREATE PISTOL REVIEW
export const createPistolReview = async (review) => {
  try {
    const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
    review.author = user._id;
    review.date = new Date().toLocaleDateString();
    const res = await axios.post(
      `${apiUrl}/pistolReviews/pistolReview`,
      review
    );
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

// UPDATE PISTOL REVIEW
export const updatePistolReview = async (review) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (user && user._id === review.author._id) {
    try {
      const res = await axios.put(
        `${apiUrl}/pistolReviews/pistolReview/${review._id}`,
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

// DELETE PISTOL REVIEW
export const deletePistolReview = async (review) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (
    user._id === review.author._id ||
    user.role === "ADMIN" ||
    user.role === "MODERATOR"
  ) {
    try {
      const res = await axios.delete(
        `${apiUrl}/pistolReviews/pistolReview/${review._id}`
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
