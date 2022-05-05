const ReviewBox = ({ review }) => {
  return (
    <div className="review-box">
      <div className="name-and-grade">
        <h6 className="review-name">{review.author.username}</h6>
        <h6 className="review-name">{review.grade} / 5</h6>
      </div>
      <p className="review-text">{review.reviewText}</p>
      <div className="control-btns"></div>
    </div>
  );
};

export default ReviewBox;
