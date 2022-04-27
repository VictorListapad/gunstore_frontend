import { useEffect, useState } from "react";
import Search from "../../components/Search";
import GearCard from "../../components/Gear/GearCard";
import { getAllGear } from "../../services/gearService";
import "../../styles/FirearmStyles/Firearm.css";

const GearView = () => {
  const [gear, setGear] = useState([]);
  const getGear = async () => {
    const res = await getAllGear();
    setGear(res.data.reverse());
  };

  const handleSearch = (modelStr) => {
    if (!modelStr) {
      getGear();
    } else {
      const filtered = gear.filter((item) =>
        item.model.toLowerCase().includes(modelStr.toLowerCase())
      );
      setGear(filtered.reverse());
    }
  };
  useEffect(() => {
    getGear();
  }, []);

  return (
    <div className="firearm-window">
      <div className="view-header">
        <h1>Gear</h1>
        <Search search={handleSearch} />
      </div>
      <div className="firearm-view-container">
        {gear.map((item) => (
          <GearCard key={item._id} gearObj={item} />
        ))}
      </div>
    </div>
  );
};

export default GearView;
