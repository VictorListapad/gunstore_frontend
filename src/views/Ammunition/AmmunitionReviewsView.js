import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReviewBox from "../../components/ReviewBox";
import { Link } from "react-router-dom";
import Preloader from "../../components/Preloader";
import { isAuthenticated } from "../../services/authService";
import { getAmmunitionById } from "../../services/ammunitionService";
import {
  deleteAmmoReview,
  getReviewsForAmmunition,
} from "../../services/ammunitionReviewService";

const AmmunitionReviewsView = () => {
  const { id } = useParams();
  const [ammunition, setAmmunition] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = isAuthenticated();
  const found = findIfReviewExists();
  const getAmmunition = async () => {
    const res = await getAmmunitionById(id);
    setAmmunition(res.data);
    setLoading(false);
  };

  const getAmmunitionReviews = async () => {
    const res = await getReviewsForAmmunition(id);
    setReviews(res.data);
  };

  const handleDelete = async (review) => {
    const choice = window.confirm(
      `Are you sure you want to delete this review?`
    );
    if (!choice) {
      return;
    }
    await deleteAmmoReview(review);
    getAmmunitionReviews();
  };

  function findIfReviewExists() {
    return reviews.find((review) => review.author._id === user._id);
  }

  useEffect(() => {
    getAmmunition();
    getAmmunitionReviews();
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="reviews-container">
          <div className="model-and-link">
            <h1 className="review-page-title">{ammunition.model} Reviews</h1>
            {found ? (
              <h5 style={{ margin: "2rem" }}>
                You have already reviewed this product
              </h5>
            ) : user ? (
              <Link
                className="reviews-link btn"
                to={`/writeAmmunitionReview/${id}`}
              >
                Write a review
              </Link>
            ) : (
              <h5>You need to be logged in to write reviews</h5>
            )}
          </div>
          {reviews.map((review) => (
            <ReviewBox
              key={review._id}
              review={review}
              user={user}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default AmmunitionReviewsView;
