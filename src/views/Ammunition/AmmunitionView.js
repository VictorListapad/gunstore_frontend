import { useState, useEffect } from "react";
import AmmunitionCard from "../../components/Ammunition/AmmunitionCard";
import Search from "../../components/Search";
import { getAllAmmunition } from "../../services/ammunitionService";
import "../../styles/FirearmStyles/Firearm.css";

const AmmunitionView = () => {
  const [ammunition, setAmmunition] = useState([]);
  const getAmmunition = async () => {
    const res = await getAllAmmunition();
    setAmmunition(res.data.reverse());
  };

  const handleSearch = (modelStr) => {
    if (!modelStr) {
      getAmmunition();
    } else {
      const filtered = ammunition.filter((item) =>
        item.model.toLowerCase().includes(modelStr.toLowerCase())
      );
      setAmmunition(filtered);
    }
  };

  useEffect(() => {
    getAmmunition();
  }, []);

  return (
    <div className="firearm-window">
      <div className="view-header">
        <h1>Ammunition</h1>
        <Search search={handleSearch} />
      </div>
      <div className="firearm-view-container">
        {ammunition.map((ammo) => (
          <AmmunitionCard key={ammo._id} ammunitionObj={ammo} />
        ))}
      </div>
    </div>
  );
};

export default AmmunitionView;
