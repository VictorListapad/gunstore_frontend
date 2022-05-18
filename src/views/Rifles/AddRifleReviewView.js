import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { createRifleReview } from "../../services/rifleReviewService";

import "../../styles/AddReviewView.css";
const AddRifleReviewView = () => {
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
    await createRifleReview(review);
    navigate(`/rifleReviews/${id}`);
  };

  return (
    <div className="review-form-container">
      <form className="form-control add-review-form" onSubmit={handleSubmit}>
        <h1>Review</h1>
        <label className="review-label" htmlFor="reviewText">
          Review
        </label>
        <textarea
          type="text"
          name="reviewText"
          id="reviewText"
          className="form-control"
          onChange={handleChange}
          value={review.reviewText}
          rows={8}
          placeholder="please leave your feedback here"
          required
        />
        <label className="review-label" htmlFor="grade">
          Score
        </label>
        <select
          type="number"
          name="grade"
          id="grade"
          className="form-control"
          onChange={handleChange}
          value={review.grade}
          required
        >
          <option value={0} disabled>
            Rate this product
          </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button className="btn review-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRifleReviewView;
