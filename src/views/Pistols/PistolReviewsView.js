import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Preloader from "../../components/Preloader";
import ReviewBox from "../../components/ReviewBox";
import { isAuthenticated } from "../../services/authService";
import {
  deletePistolReview,
  getReviewsForPistol,
} from "../../services/pistolReviewService";
import { getPistolById } from "../../services/pistolService";

const PistolReviewsView = () => {
  const { id } = useParams();
  const [pistol, setPistol] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = isAuthenticated();
  const found = findIfReviewExists();

  const getPistol = async () => {
    const res = await getPistolById(id);
    setPistol(res.data);
    setLoading(false);
  };

  const getPistolReviews = async () => {
    const res = await getReviewsForPistol(id);
    setReviews(res.data);
  };

  const handleDelete = async (review) => {
    const choice = window.confirm(
      `Are you sure you want to delete this review?`
    );
    if (!choice) {
      return;
    }
    await deletePistolReview(review);
    getPistolReviews();
  };

  function findIfReviewExists() {
    return reviews.find((review) => review.author._id === user._id);
  }
  useEffect(() => {
    getPistol();
    getPistolReviews();
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="reviews-container">
          <div className="model-and-link">
            <h1 className="review-page-title">{pistol.model} Reviews</h1>
            {found ? (
              <h5 style={{ margin: "2rem" }}>
                You have already reviewed this product
              </h5>
            ) : user ? (
              <Link
                className="reviews-link btn"
                to={`/writePistolReview/${id}`}
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

export default PistolReviewsView;
