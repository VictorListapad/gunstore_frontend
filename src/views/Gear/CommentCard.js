import "../../styles/CommentCard.css";
const CommentCard = ({ commentObj }) => {
  return (
    <div className="comment-card">
      <div className="name-and-date">
        {commentObj.author.role === "ADMIN" ||
        commentObj.author.role === "MODERATOR" ? (
          <h6 style={{ color: "#eeaf00" }}>
            {commentObj.author.username}&#10026;
          </h6>
        ) : (
          <h6 style={{ color: "#eeaf00" }}>{commentObj.author.username}</h6>
        )}
        <h6>{commentObj.date.split("T")[0].split("-").reverse().join("-")}</h6>
      </div>
      <div className="text">
        <p>{commentObj.text}</p>
      </div>
    </div>
  );
};

export default CommentCard;
