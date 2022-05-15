import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import AmmunitionSpecTable from "../../components/Ammunition/AmmunitionSpecTable";
import CommentCard from "../../components/CommentCard";
import FirearmCarousel from "../../components/FirearmCarousel";
import Preloader from "../../components/Preloader";
import {
  createAmmoComment,
  deleteAmmoComment,
  getAllAmmoComments,
} from "../../services/ammunitionCommentService";
import { getReviewsForAmmunition } from "../../services/ammunitionReviewService";
import { getAmmunitionById } from "../../services/ammunitionService";
import "../../styles/FirearmStyles/PistolDetailsView.css";

const AmmunitionDetailsView = () => {
  const { id } = useParams();
  const [ammo, setAmmo] = useState({});
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [ammoComments, setAmmoComments] = useState([]);
  const [newComment, setNewComment] = useState({
    text: "",
    productId: "",
  });
  const getAmmo = async () => {
    const res = await getAmmunitionById(id);
    setAmmo(res.data);
  };

  const getAmmoComments = async () => {
    const res = await getAllAmmoComments(id);
    setAmmoComments(res.data);
    setLoading(false);
  };

  const getAmmoReviews = async () => {
    const res = await getReviewsForAmmunition(id);
    setReviews(res.data);
  };

  const handleChange = (event) => {
    setNewComment({
      ...newComment,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = async (comment) => {
    await deleteAmmoComment(comment);
    getAmmoComments();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createAmmoComment(newComment);
    getAmmoComments();
    setNewComment({
      text: "",
      productId: id,
    });
  };
  useEffect(() => {
    getAmmo();
    getAmmoComments();
    getAmmoReviews();
    setNewComment({
      text: "",
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
              <FirearmCarousel firearmObj={ammo} />
            </div>
            <div className="firearm-name">
              <h1 className="firearm-title">
                {ammo.caliber},{ammo.grainWeight} Gr, {ammo.model},{" "}
                {ammo.ammoType}-{ammo.qtyPerPackage} Count
              </h1>
              {!reviews.length ? (
                <Link
                  to={`/ammunitionReviews/${id}`}
                  className="btn btn-primary go-to-reviews-btn"
                >
                  No Reviews Yet
                </Link>
              ) : (
                <Link
                  className="btn btn-primary go-to-reviews-btn"
                  to={`/ammunitionReviews/${id}`}
                >
                  {(
                    reviews.reduce((acc, cur) => acc + cur.grade, 0) /
                    reviews.length
                  ).toFixed(1)}
                  {""}/ 5 - ( {reviews.length} Reviews )
                </Link>
              )}
              <div className="firearm-divider"></div>
              <p className="firearm-description">
                {ammo.shortDescription} Box/{ammo.qtyPerPackage}
              </p>
            </div>
          </div>
          <div className="firearm-details">
            <h3>Details</h3>
            <p>{ammo.fullDescription}</p>
          </div>
          <div className="firearm-spec-container">
            <AmmunitionSpecTable ammo={ammo} />
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
              {ammoComments.map((comment) => (
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

export default AmmunitionDetailsView;
