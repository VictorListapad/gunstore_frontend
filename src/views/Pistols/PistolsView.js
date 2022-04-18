import { useEffect, useState } from "react";
import PistolCard from "../../components/Pistols/PistolCard";
import { getAllPistols } from "../../services/pistolService";
import "../../styles/FirearmStyles/Firearm.css";

const PistolView = () => {
  const [pistols, setPistols] = useState([]);
  const getPistols = async () => {
    const res = await getAllPistols();
    setPistols(res.data);
  };
  useEffect(() => {
    getPistols();
  }, []);

  return (
    <div className="firearm-view-container">
      <h1>Pistols</h1>
      {pistols.map((pistol) => (
        <PistolCard key={pistol._id} pistolObj={pistol} />
      ))}
    </div>
  );
};

export default PistolView;
