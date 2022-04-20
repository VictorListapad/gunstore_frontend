import { Link } from "react-router-dom";

const RifleCard = ({ rifleObj }) => {
  return (
    <div className="firearm-card">
      <div className="firearm-card-img-container">
        <img src={rifleObj.titleImg} alt="" />
      </div>
      <div className="firearm-card-info-container">
        <h5>{rifleObj.model}</h5>
        <p>{rifleObj.description}</p>
        <h5>{`$${rifleObj.price}`}</h5>
        <Link className="firearm-btn" to={`/rifle/${rifleObj._id}`}>
          SEE MORE
        </Link>
      </div>
    </div>
  );
};

export default RifleCard;
