import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentCard from "../../components/CommentCard";
import FirearmCarousel from "../../components/FirearmCarousel";
import Preloader from "../../components/Preloader";
import RifleSpecTable from "../../components/Rifles/RifleSpecTable";
import {
  createRifleComment,
  deleteRifleComment,
  getAllCommentsForRifle,
} from "../../services/rifleCommentService";
import { getRifleById } from "../../services/rifleService";
import "../../styles/FirearmStyles/PistolDetailsView.css";

const RifleDetailsView = () => {
  const [rifle, setRifle] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [rifleComments, setRifleComments] = useState([]);
  const [newComment, setNewComment] = useState({
    text: "",
    productId: "",
  });
  const getRifle = async () => {
    const res = await getRifleById(id);
    setRifle(res.data);
  };

  const getRifleComments = async () => {
    const res = await getAllCommentsForRifle(id);
    setRifleComments(res.data);
    setLoading(false);
  };
  const handleChange = (event) => {
    setNewComment({
      ...newComment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createRifleComment(newComment);
    getRifleComments();
    setNewComment({
      text: "",
      productId: id,
    });
  };
  const handleDelete = async (comment) => {
    await deleteRifleComment(comment);
    getRifleComments();
  };
  useEffect(() => {
    getRifle();
    getRifleComments();
    setNewComment({
      ...newComment,
      productId: id,
    });
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="firearm-view-container">
          <div className="firearm-intro-container">
            <div className="firearm-details-carousel">
              <FirearmCarousel firearmObj={rifle} />
            </div>
            <div className="firearm-name">
              <h1 className="firearm-title">{rifle.model}</h1>
              <div className="firearm-divider"></div>
              <p className="firearm-description">{rifle.shortDescription}</p>
            </div>
          </div>
          <div className="firearm-details">
            <h3>Details</h3>
            <p>{rifle.fullDescription}</p>
            {rifle.features ? (
              <div className="firearm-features">
                <h3>Features</h3>
                <ul>
                  {rifle.features.split(",").map((feature) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="firearm-spec-container">
            <RifleSpecTable rifle={rifle} />
          </div>
          <div className="comment-section">
            <h3>Comments and Questions</h3>
            <form onSubmit={handleSubmit}>
              <textarea
                rows={8}
                type="text"
                name="text"
                placeholder="leave a comment"
                value={newComment.text}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
            <div className="comments">
              {rifleComments.map((comment) => (
                <CommentCard
                  key={comment._id}
                  commentObj={comment}
                  handleDelete={() => handleDelete(comment)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RifleDetailsView;
