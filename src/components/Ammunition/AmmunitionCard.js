import { Link } from "react-router-dom";

const AmmunitionCard = ({ ammunitionObj }) => {
  return (
    <div className="firearm-card">
      <div className="firearm-card-img-container">
        <img src={ammunitionObj.titleImg} alt="" />
      </div>
      <div className="firearm-card-info-container">
        <h5>{ammunitionObj.model}</h5>
        <p>{ammunitionObj.description}</p>
        <h5>{`$${ammunitionObj.price}`}</h5>
        <Link className="firearm-btn" to={`/ammo/${ammunitionObj._id}`}>
          SEE MORE
        </Link>
      </div>
    </div>
  );
};

export default AmmunitionCard;
