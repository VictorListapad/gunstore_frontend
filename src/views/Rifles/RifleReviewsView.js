import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Preloader from "../../components/Preloader";
import ReviewBox from "../../components/ReviewBox";
import { isAuthenticated } from "../../services/authService";
import {
  deleteRifleReview,
  getReviewsForRifle,
} from "../../services/rifleReviewService";
import { getRifleById } from "../../services/rifleService";

const RifleReviewsView = () => {
  const { id } = useParams();
  const [rifle, setRifle] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = isAuthenticated();
  const found = findIfReviewExists();

  const getRifle = async () => {
    const res = await getRifleById(id);
    setRifle(res.data);
    setLoading(false);
  };

  const getRifleReviews = async () => {
    const res = await getReviewsForRifle(id);
    setReviews(res.data);
  };

  const handleDelete = async (review) => {
    const choice = window.confirm(
      `Are you sure you want to delete this review?`
    );
    if (!choice) {
      return;
    }
    await deleteRifleReview(review);
    getRifleReviews();
  };

  function findIfReviewExists() {
    return reviews.find((review) => review.author._id === user._id);
  }
  useEffect(() => {
    getRifle();
    getRifleReviews();
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="reviews-container">
          <div className="model-and-link">
            <h1 className="review-page-title">{rifle.model} Reviews</h1>
            {found ? (
              <h5 style={{ margin: "2rem" }}>
                You have already reviewed this product
              </h5>
            ) : user ? (
              <Link className="reviews-link btn" to={`/writeRifleReview/${id}`}>
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

export default RifleReviewsView;
