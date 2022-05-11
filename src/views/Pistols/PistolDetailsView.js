import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPistolById } from "../../services/pistolService";
import "../../styles/FirearmStyles/PistolDetailsView.css";
import FirearmCarousel from "../../components/FirearmCarousel";
import PistolSpecTable from "../../components/Pistols/PistolSpecTable";
import Preloader from "../../components/Preloader";
import CommentCard from "../../components/CommentCard";
import {
  createPistolComment,
  deletePistolComment,
  getAllCommentsForPistol,
} from "../../services/pistolCommentService";
const PistolDetailsView = () => {
  const [pistol, setPistol] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [pistolComments, setPistolComments] = useState([]);
  const [newComment, setNewComment] = useState({
    text: "",
    productId: "",
  });
  const getPistol = async () => {
    const res = await getPistolById(id);
    setPistol(res.data);
    // setLoading(false);
  };

  const getPistolComments = async () => {
    const res = await getAllCommentsForPistol(id);
    setPistolComments(res.data);
    setLoading(false);
  };

  const handleChange = (event) => {
    setNewComment({
      ...newComment,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = async (comment) => {
    await deletePistolComment(comment);
    getPistolComments();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createPistolComment(newComment);
    getPistolComments();
    setNewComment({
      text: "",
      productId: id,
    });
  };
  useEffect(() => {
    getPistol();
    getPistolComments();
    setNewComment({
      text: "",
      productId: id,
    });
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="firearm-view-container">
          <div className="firearm-intro-container">
            <div className="firearm-details-carousel">
              <FirearmCarousel firearmObj={pistol} />
            </div>
            <div className="firearm-name">
              <h1 className="firearm-title">{pistol.model}</h1>
              <div className="firearm-divider"></div>
              <p className="firearm-description">{pistol.shortDescription}</p>
            </div>
          </div>
          <div className="firearm-details">
            <h3>Details</h3>
            <p>{pistol.fullDescription}</p>
            {pistol.features ? (
              <div className="firearm-features">
                <h3>Features</h3>
                <ul>
                  {pistol.features.split(",").map((feature) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="firearm-spec-container">
            <PistolSpecTable pistol={pistol} />
          </div>
          <div className="comment-section">
            <h3>Comments and Questions</h3>
            <form onSubmit={handleSubmit}>
              <textarea
                rows={8}
                type="text"
                name="text"
                placeholder="leave a comment"
                value={newComment.text}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
            <div className="comments">
              {pistolComments.map((comment) => (
                <CommentCard
                  key={comment._id}
                  commentObj={comment}
                  handleDelete={() => handleDelete(comment)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PistolDetailsView;
