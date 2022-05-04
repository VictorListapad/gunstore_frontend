import { useEffect, useState } from "react";
import Search from "../../components/Search";
import PistolCard from "../../components/Pistols/PistolCard";
import { getAllPistols } from "../../services/pistolService";
import "../../styles/FirearmStyles/Firearm.css";
import Preloader from "../../components/Preloader";

const PistolView = () => {
  const [pistols, setPistols] = useState([]);
  const [value, setValue] = useState("all");
  const [loading, setLoading] = useState(true);
  const getPistols = async () => {
    const res = await getAllPistols();
    if (value === "all") {
      setPistols(res.data.reverse());
      setLoading(false);
    } else {
      const filtered = res.data.filter((pistol) =>
        pistol.caliber.toLowerCase().includes(value.toLocaleLowerCase())
      );
      setPistols(filtered.reverse());
      setLoading(false);
    }
  };

  const handleSearch = (modelStr) => {
    if (!modelStr) {
      getPistols();
    } else {
      const filtered = pistols.filter((item) =>
        item.model.toLowerCase().includes(modelStr.toLowerCase())
      );
      setPistols(filtered.reverse());
    }
  };

  const radioCheckHandler = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    getPistols(value);
  }, [value]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="firearm-window">
          <div className="view-header">
            <h1>Pistols</h1>
            <Search search={handleSearch} />
            <div className="radio-btns-container">
              <label htmlFor="all">All</label>
              <input
                className="radio-btn"
                type="radio"
                name="caliber"
                value="all"
                id="all"
                onChange={radioCheckHandler}
                checked={value === "all"}
              />
              <label htmlFor="9mm">9mm</label>
              <input
                className="radio-btn"
                type="radio"
                name="caliber"
                value="9mm Luger"
                id="9mm"
                onChange={radioCheckHandler}
                checked={value === "9mm Luger"}
              />
              <label htmlFor="45Auto">.45 Auto</label>
              <input
                className="radio-btn"
                type="radio"
                name="caliber"
                value="45 Auto"
                id="45Auto"
                onChange={radioCheckHandler}
                checked={value === "45 Auto"}
              />
            </div>
          </div>
          <div className="firearm-view-container">
            {pistols.map((pistol) => (
              <PistolCard key={pistol._id} pistolObj={pistol} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PistolView;
