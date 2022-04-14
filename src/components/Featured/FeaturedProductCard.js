import { Link } from "react-router-dom";
import "../../styles/FeaturedProductCard.css";
const FeaturedProductCard = ({ productObj }) => {
  return (
    <div className="featured-card">
      <div className="featured-card-img-container">
        <img src={productObj.titleImg} alt="" />
      </div>
      <div className="featured-card-info-container">
        <h5>{productObj.model}</h5>
        <p>{productObj.description}</p>
        <h5>{`$${productObj.price}`}</h5>
        <Link className="featured-btn" to={`/pistol/${productObj._id}`}>
          SEE MORE
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
