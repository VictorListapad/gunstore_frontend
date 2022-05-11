import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = process.env.REACT_APP_API_URL;

// GEAT ALL COMMENTS FOR SPECIFIC PISTOL
export const getAllCommentsForPistol = async (id) => {
  return await axios.get(`${apiUrl}/pistolComments/pistol/${id}`);
};

// CREATE COMMENT FOR PISTOL
export const createPistolComment = async (newComment) => {
  try {
    const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
    newComment.author = user._id;
    newComment.date = new Date().toLocaleDateString();
    const res = await axios.post(
      `${apiUrl}/pistolComments/pistolComment`,
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

// GET COMMENT BY ID
export const getPistolCommentById = async (id) => {
  return await axios.get(`${apiUrl}/pistolComments/pistolComment/${id}`);
};

// UPDATE PISTOL COMMENT
export const updatePistolComment = async (id, updatedComment) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (
    user._id === updatedComment.author._id ||
    user.role === "ADMIN" ||
    user.role === "MODERATOR"
  ) {
    try {
      const res = await axios.put(
        `${apiUrl}/pistolComments/pistolComment/${id}`,
        updatedComment
      );
      toast.success(`Comment Updated`, {
        theme: "dark",
      });
      return res;
    } catch (error) {
      toast.error(`You have no permit to update this comment `, {
        theme: "dark",
      });
      return;
    }
  } else {
    toast.error(`You have no permit to update this comment `, {
      theme: "dark",
    });
    return;
  }
};

// DELETE PISTOL COMMENT
export const deletePistolComment = async (comment) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (
    user._id === comment.author._id ||
    user.role === "ADMIN" ||
    user.role === "MODERATOR"
  ) {
    try {
      await axios.delete(
        `${apiUrl}/pistolComments/pistolComment/${comment._id}`
      );
      toast.success(`Comment Deleted`, {
        theme: "dark",
      });
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
