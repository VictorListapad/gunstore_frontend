import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AmmunitionSpecTable from "../../components/Ammunition/AmmunitionSpecTable";
import FirearmCarousel from "../../components/FirearmCarousel";
import { getAmmunitionById } from "../../services/ammunitionService";
import "../../styles/FirearmStyles/PistolDetailsView.css";

const AmmunitionDetailsView = () => {
  const { id } = useParams();
  const [ammo, setAmmo] = useState({});
  const getAmmo = async () => {
    const res = await getAmmunitionById(id);
    setAmmo(res.data);
  };

  useEffect(() => {
    getAmmo();
  }, [ammo]);

  return (
    <div className="firearm-view-container">
      <div className="firearm-intro-container">
        <div className="firearm-details-carousel">
          <FirearmCarousel firearmObj={ammo} />
        </div>
        <div className="firearm-name">
          <h1 className="firearm-title">
            {ammo.caliber},{ammo.grainWeight} Gr, {ammo.model}, {ammo.ammoType}{" "}
            - {ammo.qtyPerPackage} Count
          </h1>
          <div className="firearm-divider"></div>
          <p className="firearm-description">
            {ammo.shortDescription} Box/{ammo.qtyPerPackage}
          </p>
        </div>
      </div>
      <div className="firearm-details">
        <h3>Details</h3>
        <p>{ammo.fullDescription}</p>
      </div>
      <div className="firearm-spec-container">
        <AmmunitionSpecTable ammo={ammo} />
      </div>
    </div>
  );
};

export default AmmunitionDetailsView;
