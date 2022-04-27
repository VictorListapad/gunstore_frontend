import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FirearmCarousel from "../../components/FirearmCarousel";
import { getGearById } from "../../services/gearService";
import "../../styles/FirearmStyles/PistolDetailsView.css";

const GearDetailsView = () => {
  const { id } = useParams();
  const [gear, setGear] = useState({});
  const getGear = async () => {
    const res = await getGearById(id);
    setGear(res.data);
  };
  useEffect(() => {
    getGear();
  });

  return (
    <div className="firearm-view-container">
      <div className="firearm-intro-container">
        <div className="firearm-details-carousel">
          <FirearmCarousel firearmObj={gear} />
        </div>
        <div className="firearm-name">
          <h1 className="firearm-title">{gear.model}</h1>
          <div className="firearm-divider"></div>
          <p className="firearm-description">{gear.shortDescription}</p>
        </div>
      </div>
      <div className="firearm-details">
        <h3>Details</h3>
        <p>{gear.fullDescription}</p>
        {gear.features ? (
          <div className="firearm-features">
            <h3>Features</h3>
            <ul>
              {gear.features.split(",").map((feature) => (
                <li>{feature}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      {/* <div className="firearm-spec-container">
        <PistolSpecTable pistol={pistol} />
      </div> */}
    </div>
  );
};

export default GearDetailsView;
