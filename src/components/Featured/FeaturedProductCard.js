import { Link } from "react-router-dom";
const FeaturedProductCard = ({ productObj }) => {
  return (
    <div className="firearm-card">
      {productObj.newProduct ? <div className="newItem">New</div> : null}
      <div className="firearm-card-img-container">
        <img src={productObj.titleImg} alt={`${productObj.model}`} />
      </div>
      <div className="firearm-card-info-container">
        <h5>{productObj.model}</h5>
        <p>
          {productObj.shortDescription.length > 70
            ? `${productObj.shortDescription.slice(0, 70)}...`
            : productObj.shortDescription}
        </p>
        <h5>{`$${productObj.price}`}</h5>
        {productObj.type === "pistol" ? (
          <Link className="firearm-btn" to={`/pistol/${productObj._id}`}>
            SEE MORE
          </Link>
        ) : (
          <Link className="firearm-btn" to={`/rifle/${productObj._id}`}>
            SEE MORE
          </Link>
        )}
      </div>
    </div>
  );
};

export default FeaturedProductCard;
