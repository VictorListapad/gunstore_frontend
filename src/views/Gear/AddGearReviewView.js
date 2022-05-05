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
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddGearReviewView;
