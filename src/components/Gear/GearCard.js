import { Link } from "react-router-dom";

const GearCard = ({ gearObj }) => {
  return (
    <div className="firearm-card">
      {gearObj.newProduct ? <div className="newItem">New</div> : null}
      <div className="firearm-card-img-container">
        <img src={gearObj.titleImg} alt="" />
      </div>
      <div
        className="firearm-card-info-container"
        style={{ textAlign: "center" }}
      >
        <h5>{gearObj.model}</h5>
        <p>{gearObj.shortDescription}</p>
        <h5>{`$${gearObj.price}`}</h5>
        <Link className="firearm-btn" to={`/item/${gearObj._id}`}>
          SEE MORE
        </Link>
      </div>
    </div>
  );
};

export default GearCard;
