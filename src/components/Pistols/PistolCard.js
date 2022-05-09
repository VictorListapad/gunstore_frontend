import { Link } from "react-router-dom";

const PistolCard = ({ pistolObj }) => {
  return (
    <div className="firearm-card">
      {pistolObj.newProduct ? <div className="newItem">New</div> : null}
      <div className="firearm-card-img-container">
        <img src={pistolObj.titleImg} alt="" />
      </div>
      <div className="firearm-card-info-container">
        <h5>{pistolObj.model}</h5>
        <p>
          {pistolObj.shortDescription.length > 70
            ? `${pistolObj.shortDescription.slice(0, 70)}...`
            : pistolObj.shortDescription}
        </p>
        <h5 className="price">{`$${pistolObj.price}`}</h5>
        <Link className="firearm-btn" to={`/pistol/${pistolObj._id}`}>
          SEE DETAILS
        </Link>
      </div>
    </div>
  );
};

export default PistolCard;
