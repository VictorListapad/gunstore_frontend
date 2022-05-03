import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = process.env.REACT_APP_API_URL;

// GEAT ALL COMMENTS FOR GEAR ITEM
export const getAllCommentsForGear = async (id) => {
  const res = await axios.get(`${apiUrl}/gearComments/item/${id}`);
  return res;
};

// CREATE COMMENT FOR GEAR ITEM
export const createGearComment = async (newComment) => {
  try {
    const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
    newComment.author = user._id;
    newComment.date = new Date().toLocaleDateString();
    const res = await axios.post(
      `${apiUrl}/gearComments/gearComment`,
      newComment
    );
    toast.success(`Comment Created`, {
      theme: "dark",
    });
    return res;
  } catch (error) {
    toast.error(`You need to be logged in to write comments `, {
      theme: "dark",
    });
    return;
  }
};

// GET GEAR COMMENT BY ID
export const getGearCommentById = async (id) => {
  const res = await axios.get(`${apiUrl}/gearComments/gearComment/${id}`);
  return res;
};

// UPDATE GEAR COMMENT
export const updateGearComment = async (id, comment) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (
    user._id === comment.author._id ||
    user.role === "ADMIN" ||
    user.role === "MODERATOR"
  ) {
    try {
      const res = await axios.put(
        `${apiUrl}/gearComments/gearComment/${id}`,
        comment
      );
      toast.success(`Comment Updated`, {
        theme: "dark",
      });
      return res;
    } catch (error) {
      toast.error(`You have no permit to delete this comment `, {
        theme: "dark",
      });
      return;
    }
  } else {
    toast.error(`You have no permit to delete this comment `, {
      theme: "dark",
    });
    return;
  }
};

// DELETE GEAR COMMENT
export const deleteGearComment = async (comment) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (
    user._id === comment.author._id ||
    user.role === "ADMIN" ||
    user.role === "MODERATOR"
  ) {
    try {
      await axios.delete(`${apiUrl}/gearComments/gearComment/${comment._id}`);
      toast.success(`Comment Deleted`, {
        theme: "dark",
      });
    } catch (error) {
      return;
    }
  } else {
    toast.error(`You have no permit to delete this comment `, {
      theme: "dark",
    });
  }
};
