import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { createGearReview } from "../../services/gearReviewService";

const AddGearReviewView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState({
    author: "",
    reviewText: "",
    grade: 0,
    productId: id,
  });

  const handleChange = (event) => {
    setReview({
      ...review,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createGearReview(review);
    navigate(`/gearItemReviews/${id}`);
  };

  return (
    <div className="review-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="reviewText"
          id="reviewText"
          className="form-control"
          onChange={handleChange}
          value={review.reviewText}
        />
        <input
          type="number"
          name="grade"
          id="grade"
          className="form-control"
          onChange={handleChange}
          value={review.grade}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddGearReviewView;
