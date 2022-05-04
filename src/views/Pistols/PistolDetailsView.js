import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPistolById } from "../../services/pistolService";
import "../../styles/FirearmStyles/PistolDetailsView.css";
import FirearmCarousel from "../../components/FirearmCarousel";
import PistolSpecTable from "../../components/Pistols/PistolSpecTable";
import Preloader from "../../components/Preloader";
const PistolDetailsView = () => {
  const [pistol, setPistol] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getPistol = async () => {
    const res = await getPistolById(id);
    setPistol(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getPistol();
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="firearm-view-container">
          <div className="firearm-intro-container">
            <div className="firearm-details-carousel">
              <FirearmCarousel firearmObj={pistol} />
            </div>
            <div className="firearm-name">
              <h1 className="firearm-title">{pistol.model}</h1>
              <div className="firearm-divider"></div>
              <p className="firearm-description">{pistol.shortDescription}</p>
            </div>
          </div>
          <div className="firearm-details">
            <h3>Details</h3>
            <p>{pistol.fullDescription}</p>
            {pistol.features ? (
              <div className="firearm-features">
                <h3>Features</h3>
                <ul>
                  {pistol.features.split(",").map((feature) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="firearm-spec-container">
            <PistolSpecTable pistol={pistol} />
          </div>
        </div>
      )}
    </>
  );
};

export default PistolDetailsView;
