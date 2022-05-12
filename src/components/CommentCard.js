import { isAuthenticated } from "../services/authService";
import { Link } from "react-router-dom";
import "../styles/CommentCard.css";
const CommentCard = ({ commentObj, handleDelete }) => {
  const user = isAuthenticated();
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
        <p
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          {commentObj.text}
        </p>
      </div>
      <div className="comment-controls">
        {(user && user._id === commentObj.author._id) ||
        (user && user.role === "ADMIN") ||
        (user && user.role === "MODERATOR") ? (
          <div className="comment-btns">
            <button className="btn comment-delete-btn" onClick={handleDelete}>
              Delete
            </button>
            {commentObj.productId.type === "gear" ? (
              <Link
                className="btn comment-edit-btn"
                to={`/editGearComment/${commentObj._id}`}
              >
                Edit
              </Link>
            ) : commentObj.productId.type === "pistol" ? (
              <Link
                className="btn comment-edit-btn"
                to={`/editPistolComment/${commentObj._id}`}
              >
                Edit
              </Link>
            ) : commentObj.productId.type === "ammunition" ? (
              <Link
                className="btn comment-edit-btn"
                to={`/editAmmunitionComment/${commentObj._id}`}
              >
                Edit
              </Link>
            ) : (
              <Link
                className="btn comment-edit-btn"
                to={`/editRifleComment/${commentObj._id}`}
              >
                Edit
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CommentCard;
