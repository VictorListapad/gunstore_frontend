import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = process.env.REACT_APP_API_URL;

// GET ALL COMMENTS FOR SPECIFIC RIFLE
export const getAllCommentsForRifle = async (id) => {
  return await axios.get(`${apiUrl}/rifleComments/rifle/${id}`);
};

// GET RIFLE COMMENT BY ID
export const getRifleCommentById = async (id) => {
  return await axios.get(`${apiUrl}/rifleComments/rifleComment/${id}`);
};

// CREATE RIFLE COMMENT
export const createRifleComment = async (newComment) => {
  try {
    const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
    newComment.author = user._id;
    newComment.date = new Date().toLocaleDateString();
    const res = await axios.post(
      `${apiUrl}/rifleComments/rifleComment`,
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

// UPDATE RIFLE COMMENT
export const updateRifleComment = async (id, updatedComment) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (
    user._id === updatedComment.author._id ||
    user.role === "ADMIN" ||
    user.role === "MODERATOR"
  ) {
    try {
      const res = await axios.put(
        `${apiUrl}/rifleComments/rifleComment/${id}`,
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

// DELETE RIFLE COMMENT
export const deleteRifleComment = async (comment) => {
  const { user } = JSON.parse(localStorage.getItem(`smokeandbarrels`));
  if (
    user._id === comment.author._id ||
    user.role === "ADMIN" ||
    user.role === "MODERATOR"
  ) {
    try {
      await axios.delete(`${apiUrl}/rifleComments/rifleComment/${comment._id}`);
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
