import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReviewBox from "../../components/ReviewBox";
import { getReviewsForGear } from "../../services/gearReviewService";
import { getGearById } from "../../services/gearService";
import { Link } from "react-router-dom";

const GearReviewsView = () => {
  const { id } = useParams();
  const [gear, setGear] = useState({});
  const [reviews, setReviews] = useState([]);

  const getGear = async () => {
    const res = await getGearById(id);
    setGear(res.data);
  };

  const getGearReviews = async () => {
    const res = await getReviewsForGear(id);
    setReviews(res.data);
  };

  useEffect(() => {
    getGear();
    getGearReviews();
  }, []);

  return (
    <div className="reviews-container">
      <h1 className="review-page-title">{gear.model} Reviews</h1>
      <Link to={`/writeGearReview/${id}`}>Write a review</Link>
      {reviews.map((review) => (
        <ReviewBox key={review._id} review={review} />
      ))}
    </div>
  );
};

export default GearReviewsView;
