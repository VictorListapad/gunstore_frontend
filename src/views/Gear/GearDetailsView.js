import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import FirearmCarousel from "../../components/FirearmCarousel";
import Preloader from "../../components/Preloader";
import {
  createGearComment,
  deleteGearComment,
  getAllCommentsForGear,
} from "../../services/gearCommentService";
import { getReviewsForGear } from "../../services/gearReviewService";
import { getGearById } from "../../services/gearService";
import "../../styles/FirearmStyles/PistolDetailsView.css";
import CommentCard from "./CommentCard";

const GearDetailsView = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [gear, setGear] = useState({});
  const [gearComments, setGearComments] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newComment, setNewComment] = useState({
    text: "",
    productId: "",
  });
  const getGear = async () => {
    const res = await getGearById(id);
    setGear(res.data);
  };
  const getGearComments = async () => {
    const res = await getAllCommentsForGear(id);
    setGearComments(res.data);
    setLoading(false);
  };
  const getGearReviews = async () => {
    const res = await getReviewsForGear(id);
    setReviews(res.data);
  };
  const handleChange = (event) => {
    setNewComment({
      ...newComment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createGearComment(newComment);
    getGearComments();
    setNewComment({
      text: "",
      productId: id,
    });
  };

  const handleDelete = async (comment) => {
    await deleteGearComment(comment);
    getGearComments();
  };
  useEffect(() => {
    getGear();
    getGearComments();
    setNewComment({
      ...newComment,
      productId: id,
    });
    getGearReviews();
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="firearm-view-container">
          <div className="firearm-intro-container">
            <div className="firearm-details-carousel">
              <FirearmCarousel firearmObj={gear} />
            </div>
            <div className="firearm-name">
              <h1 className="firearm-title">{gear.model}</h1>
              {!reviews ? (
                <Link to={`/gearItemReviews/${id}`}>No Reviews Yet</Link>
              ) : (
                <Link id="temp" to={`/gearItemReviews/${id}`}>
                  {(
                    reviews.reduce((acc, cur) => acc + cur.grade, 0) /
                    reviews.length
                  ).toFixed(1)}
                </Link>
              )}

              <div className="firearm-divider"></div>
              <p className="firearm-description">{gear.shortDescription}</p>
            </div>
          </div>
          <div className="firearm-details">
            <h3>Details</h3>
            <p>{gear.fullDescription}</p>
            {gear.features ? (
              <div className="firearm-features">
                <h3>Features</h3>
                <ul>
                  {gear.features.split(",").map((feature) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="comment-section">
            <h1>Comments and Questions</h1>
            <form onSubmit={handleSubmit}>
              <textarea
                rows={8}
                type="text"
                name="text"
                placeholder="leave a comment"
                value={newComment.text}
                onChange={handleChange}
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
            <div className="comments">
              {gearComments.map((comment) => (
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

export default GearDetailsView;
