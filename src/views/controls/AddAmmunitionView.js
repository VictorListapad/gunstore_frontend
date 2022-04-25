import { useState } from "react";
import { useNavigate } from "react-router";
import AmmunitionForm from "../../components/Ammunition/AmmunitionForm";
import { createAmmunition } from "../../services/ammunitionService";

const AddAmmunitionView = () => {
  const [newAmmo, setNewAmmo] = useState({
    model: "",
    manufacturer: "",
    shortDescription: "",
    fullDescription: "",
    availability: "",
    useFor: "",
    ammoType: "",
    caliber: "",
    grainWeight: 0,
    qtyPerPackage: 0,
    muzzleVelocity: 0,
    muzzleEnergy: 0,
    price: 0,
    titleImg: "",
    extraImg1: "",
    extraImg2: "",
    extraImg3: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setNewAmmo({
      ...newAmmo,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await createAmmunition(newAmmo);
    navigate("/ammunition");
  }
  return (
    <div className="add-firearm-form-container">
      <AmmunitionForm
        ammo={newAmmo}
        cbHandleChange={handleChange}
        cbHandleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddAmmunitionView;
