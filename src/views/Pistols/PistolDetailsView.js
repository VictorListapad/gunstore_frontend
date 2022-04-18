import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPistolById } from "../../services/pistolService";
import "../../styles/FirearmStyles/PistolDetailsView.css";
import FirearmCarousel from "../../components/FirearmCarousel";
import PistolSpecTable from "../../components/Pistols/PistolSpecTable";
const PistolDetailsView = () => {
  const [pistol, setPistol] = useState({});
  const { id } = useParams();
  const getPistol = async () => {
    const res = await getPistolById(id);
    setPistol(res.data);
  };
  useEffect(() => {
    getPistol();
  }, []);
  return (
    <div className="firearm-view-container">
      <div className="firearm-intro-container">
        <div className="firearm-details-carousel">
          <FirearmCarousel firearmObj={pistol} />
        </div>
        <div className="firearm-name">
          <h1 className="firearm-title">{pistol.model}</h1>
          <div className="firearm-divider"></div>
          <p className="firearm-description">{pistol.description}</p>
        </div>
      </div>
      <div className="firearm-spec-container">
        <PistolSpecTable pistol={pistol} />
      </div>
    </div>
  );
};

export default PistolDetailsView;
