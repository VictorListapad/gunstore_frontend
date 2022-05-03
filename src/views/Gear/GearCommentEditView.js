import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  getGearCommentById,
  updateGearComment,
} from "../../services/gearCommentService";

const GearCommentEditView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState({
    text: "",
  });
  const getComment = async () => {
    const res = await getGearCommentById(id);
    setComment(res.data);
  };

  const handleChange = (event) => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateGearComment(id, comment);
    setComment({
      text: "",
    });
    navigate(`/item/${comment.productId._id}`);
  };

  useEffect(() => {
    getComment();
  }, []);
  return (
    <div className="firearm-form">
      <form onSubmit={handleSubmit}>
        <h1>Edit Comment</h1>
        <textarea
          className="form-control"
          type="text"
          name="text"
          value={comment.text}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Submit Changes
        </button>
      </form>
    </div>
  );
};

export default GearCommentEditView;
