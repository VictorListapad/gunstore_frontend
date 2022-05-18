import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  getRifleReviewById,
  updateRifleReview,
} from "../../services/rifleReviewService";

const EditRifleReviewView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [review, setReview] = useState({
    reviewText: "",
    grade: "",
  });

  const getRifleReview = async () => {
    const res = await getRifleReviewById(id);
    setReview(res.data);
  };

  const handleChange = (event) => {
    setReview({
      ...review,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateRifleReview(review);
    navigate(`/rifleReviews/${review.productId._id}`);
  };

  useEffect(() => {
    getRifleReview();
  }, []);

  return (
    <div className="review-edit-container">
      <form className="form-control add-review-form" onSubmit={handleSubmit}>
        <h1>Edit Review</h1>
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

export default EditRifleReviewView;
