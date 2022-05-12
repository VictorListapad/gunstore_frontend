import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = process.env.REACT_APP_API_URL;

// GET ALL COMMENT FOR AMMO
export const getAllAmmoComments = async (id) => {
  return await axios.get(`${apiUrl}/ammunitionComments/ammo/${id}`);
};

// GET AMMO COMMENT BY ID
export const getAmmoCommentById = async (id) => {
  return await axios.get(
    `${apiUrl}/ammunitionComments/ammunitionComment/${id}`
  );
};

// CREATE AMMO COMMENT
export const createAmmoComment = async (newComment) => {
  try {
    const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
    newComment.author = user._id;
    newComment.date = new Date().toLocaleDateString();
    const res = await axios.post(
      `${apiUrl}/ammunitionComments/ammunitionComment`,
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

// UPDATE AMMO COMMENT
export const updateAmmoComment = async (id, updatedComment) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (
    user._id === updatedComment.author._id ||
    user.role === "ADMIN" ||
    user.role === "MODERATOR"
  ) {
    try {
      const res = await axios.put(
        `${apiUrl}/ammunitionComments/ammunitionComment/${id}`,
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

// DELETE AMMO COMMENT
export const deleteAmmoComment = async (comment) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (
    user._id === comment.author._id ||
    user.role === "ADMIN" ||
    user.role === "MODERATOR"
  ) {
    try {
      await axios.delete(
        `${apiUrl}/ammunitionComments/ammunitionComment/${comment._id}`
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
