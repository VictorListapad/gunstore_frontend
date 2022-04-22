import { useEffect, useState } from "react";
import Search from "../../components/Search";
import PistolCard from "../../components/Pistols/PistolCard";
import { getAllPistols } from "../../services/pistolService";
import "../../styles/FirearmStyles/Firearm.css";

const PistolView = () => {
  const [pistols, setPistols] = useState([]);
  const getPistols = async () => {
    const res = await getAllPistols();
    setPistols(res.data);
  };

  const handleSearch = (modelStr) => {
    if (!modelStr) {
      getPistols();
    } else {
      const filtered = pistols.filter((item) =>
        item.model.toLowerCase().includes(modelStr.toLowerCase())
      );
      setPistols(filtered);
    }
  };

  useEffect(() => {
    getPistols();
  }, []);

  return (
    <div className="firearm-window">
      <div className="view-header">
        <h1>Pistols</h1>
        <Search search={handleSearch} />
      </div>
      <div className="firearm-view-container">
        {pistols.map((pistol) => (
          <PistolCard key={pistol._id} pistolObj={pistol} />
        ))}
      </div>
    </div>
  );
};

export default PistolView;
