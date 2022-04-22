import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FirearmCarousel from "../../components/FirearmCarousel";
import RifleSpecTable from "../../components/Rifles/RifleSpecTable";
import { getRifleById } from "../../services/rifleService";
import "../../styles/FirearmStyles/PistolDetailsView.css";

const RifleDetailsView = () => {
  const [rifle, setRifle] = useState({});
  const { id } = useParams();
  const getRifle = async () => {
    const res = await getRifleById(id);
    setRifle(res.data);
  };
  useEffect(() => {
    getRifle();
  }, []);

  return (
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
      <div className="firearm-spec-container">
        <RifleSpecTable rifle={rifle} />
      </div>
    </div>
  );
};

export default RifleDetailsView;
