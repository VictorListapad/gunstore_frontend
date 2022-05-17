import { Link } from "react-router-dom";
import "../styles/ReviewBox.css";
const ReviewBox = ({ review, user, handleDelete }) => {
  return (
    <div className="review-box">
      <div className="name-and-grade">
        <h6 className="review-name">{review.author.username}</h6>
        <h6 className="review-score">
          Score:
          {review.grade <= 2 ? (
            <span style={{ color: "red" }}> {review.grade} / 5</span>
          ) : review.grade === 3 ? (
            <span style={{ color: "#eeaf00" }}> {review.grade} / 5</span>
          ) : (
            <span style={{ color: "green" }}> {review.grade} / 5</span>
          )}
        </h6>
        <h6>{review.date.split(`T`)[0].split(`-`).reverse().join(`-`)}</h6>
      </div>
      <div className="review-divider"></div>
      <p className="review-text">{review.reviewText}</p>
      <div className="control-btns">
        {(user && user._id === review.author._id) ||
        user.role === "ADMIN" ||
        user.role === "MODERATOR" ? (
          <button
            className="btn delete-review-btn"
            onClick={() => handleDelete(review)}
          >
            Delete
          </button>
        ) : null}
        {user && user._id === review.author._id ? (
          review.type === "gear" ? (
            <Link
              to={`/editGearReview/${review._id}`}
              className="btn edit-review-btn"
            >
              Edit
            </Link>
          ) : (
            <Link
              to={`/editAmmunitionReview/${review._id}`}
              className="btn edit-review-btn"
            >
              Edit
            </Link>
          )
        ) : // <Link
        //   to={`/editGearReview/${review._id}`}
        //   className="btn edit-review-btn"
        // >
        //   Edit
        // </Link>
        null}
      </div>
    </div>
  );
};

export default ReviewBox;
