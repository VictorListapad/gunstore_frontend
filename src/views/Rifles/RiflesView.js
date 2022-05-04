import { useEffect, useState } from "react";
import Preloader from "../../components/Preloader";
import RifleCard from "../../components/Rifles/RifleCard";
import Search from "../../components/Search";
import { getAllRifles } from "../../services/rifleService";
import "../../styles/FirearmStyles/Firearm.css";

const RiflesView = () => {
  const [rifles, setRifles] = useState([]);
  const [loading, setLoading] = useState(true);
  const getRifles = async () => {
    const res = await getAllRifles();
    setRifles(res.data.reverse());
    setLoading(false);
  };
  const handleSearch = (modelStr) => {
    if (!modelStr) {
      getRifles();
    } else {
      const filtered = rifles.filter((item) =>
        item.model.toLowerCase().includes(modelStr.toLowerCase())
      );
      setRifles(filtered);
    }
  };
  useEffect(() => {
    getRifles();
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="firearm-window">
          <div className="view-header">
            <h1>Pistols</h1>
            <Search search={handleSearch} />
          </div>
          <div className="firearm-view-container">
            <h1>Rifles</h1>
            {rifles.map((rifle) => (
              <RifleCard key={rifle._id} rifleObj={rifle} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RiflesView;
