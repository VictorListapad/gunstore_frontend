import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = process.env.REACT_APP_API_URL;

// GET ALL REVIEWS FOR A SPECIFIC AMMO
export const getReviewsForAmmunition = async (id) => {
  return await axios(`${apiUrl}/ammunitionReviews/ammo/${id}`);
};

// GET REVIEW BY ID
export const getAmmoReviewById = async (id) => {
  return await axios.get(`${apiUrl}/ammunitionReviews/ammunitionReview/${id}`);
};

// CREATE NEW AMMO REVIEW
export const createAmmoReview = async (review) => {
  try {
    const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
    review.author = user._id;
    review.date = new Date().toLocaleDateString();
    const res = await axios.post(
      `${apiUrl}/ammunitionReviews/ammunitionReview`,
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

// UPDATE REVIEW
export const updateAmmoReview = async (review) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (user && user._id === review.author._id) {
    try {
      const res = await axios.put(
        `${apiUrl}/ammunitionReviews/ammunitionReview/${review._id}`,
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

export const deleteAmmoReview = async (review) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (
    user._id === review.author._id ||
    user.role === "ADMIN" ||
    user.role === "MODERATOR"
  ) {
    try {
      const res = await axios.delete(
        `${apiUrl}/ammunitionReviews/ammunitionReview/${review._id}`
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
