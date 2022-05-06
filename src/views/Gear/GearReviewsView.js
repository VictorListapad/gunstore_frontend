import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReviewBox from "../../components/ReviewBox";
import {
  deleteGearReview,
  getReviewsForGear,
} from "../../services/gearReviewService";
import { getGearById } from "../../services/gearService";
import { Link } from "react-router-dom";
import Preloader from "../../components/Preloader";
import { isAuthenticated } from "../../services/authService";

const GearReviewsView = () => {
  const { id } = useParams();
  const [gear, setGear] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = isAuthenticated();
  const found = findIfReviewExists();
  const getGear = async () => {
    const res = await getGearById(id);
    setGear(res.data);
    setLoading(false);
  };

  const getGearReviews = async () => {
    const res = await getReviewsForGear(id);
    setReviews(res.data);
  };

  const handleDelete = async (review) => {
    const choice = window.confirm(
      `Are you sure you want to delete this review?`
    );
    if (!choice) {
      return;
    }
    await deleteGearReview(review);
    getGearReviews();
  };

  function findIfReviewExists() {
    return reviews.find((review) => review.author._id === user._id);
  }

  useEffect(() => {
    getGear();
    getGearReviews();
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="reviews-container">
          <div className="model-and-link">
            <h1 className="review-page-title">{gear.model} Reviews</h1>
            {found ? (
              <h5 style={{ margin: "2rem" }}>
                You have already reviewed this product
              </h5>
            ) : user ? (
              <Link className="reviews-link btn" to={`/writeGearReview/${id}`}>
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

export default GearReviewsView;
