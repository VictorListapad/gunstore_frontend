import { isAuthenticated } from "../../services/authService";
import "../../styles/CommentCard.css";
const CommentCard = ({ commentObj, handleDelete }) => {
  const userLoggedIn = () => {
    const user = JSON.parse(localStorage.getItem(`smokeandbarrels`));
    if (user === null) {
      return false;
    }
    return user;
  };
  const { user } = userLoggedIn();
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
      <div className="comment-controls">
        {(user && user._id === commentObj.author._id) ||
        (user && user.role === "ADMIN") ||
        (user && user.role === "MODERATOR") ? (
          <button onClick={handleDelete}>Delete</button>
        ) : null}
      </div>
    </div>
  );
};

export default CommentCard;
