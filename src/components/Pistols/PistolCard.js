import { Link } from "react-router-dom";

const PistolCard = ({ pistolObj }) => {
  return (
    <div className="firearm-card">
      <div className="firearm-card-img-container">
        <img src={pistolObj.titleImg} alt="" />
      </div>
      <div className="firearm-card-info-container">
        <h5>{pistolObj.model}</h5>
        <p>{pistolObj.shortDescription}</p>
        <h5>{`$${pistolObj.price}`}</h5>
        <Link className="firearm-btn" to={`/pistol/${pistolObj._id}`}>
          SEE MORE
        </Link>
      </div>
    </div>
  );
};

export default PistolCard;
