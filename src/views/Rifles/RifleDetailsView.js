import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FirearmCarousel from "../../components/FirearmCarousel";
import Preloader from "../../components/Preloader";
import RifleSpecTable from "../../components/Rifles/RifleSpecTable";
import { getRifleById } from "../../services/rifleService";
import "../../styles/FirearmStyles/PistolDetailsView.css";

const RifleDetailsView = () => {
  const [rifle, setRifle] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const getRifle = async () => {
    const res = await getRifleById(id);
    setRifle(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getRifle();
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="firearm-view-container">
          <div className="firearm-intro-container">
            <div className="firearm-details-carousel">
              <FirearmCarousel firearmObj={rifle} />
            </div>
            <div className="firearm-name">
              <h1 className="firearm-title">{rifle.model}</h1>
              <div className="firearm-divider"></div>
              <p className="firearm-description">{rifle.shortDescription}</p>
            </div>
          </div>
          <div className="firearm-details">
            <h3>Details</h3>
            <p>{rifle.fullDescription}</p>
            {rifle.features ? (
              <div className="firearm-features">
                <h3>Features</h3>
                <ul>
                  {rifle.features.split(",").map((feature) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="firearm-spec-container">
            <RifleSpecTable rifle={rifle} />
          </div>
        </div>
      )}
    </>
  );
};

export default RifleDetailsView;
