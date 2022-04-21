import { useEffect, useState } from "react";
import RifleCard from "../../components/Rifles/RifleCard";
import { getAllRifles } from "../../services/rifleService";
import "../../styles/FirearmStyles/Firearm.css";

const RiflesView = () => {
  const [rifles, setRifles] = useState([]);
  const getRifles = async () => {
    const res = await getAllRifles();
    setRifles(res.data);
  };
  useEffect(() => {
    getRifles();
  }, [rifles]);
  return (
    <div className="firearm-view-container">
      <h1>Rifles</h1>
      {rifles.map((rifle) => (
        <RifleCard key={rifle._id} rifleObj={rifle} />
      ))}
    </div>
  );
};

export default RiflesView;
