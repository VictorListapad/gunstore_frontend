import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import AmmunitionForm from "../../components/Ammunition/AmmunitionForm";
import {
  getAmmunitionById,
  updateAmmunition,
} from "../../services/ammunitionService";

const EditAmmunitionView = () => {
  const navigate = useNavigate();
  const [ammo, setAmmo] = useState({
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
  const { id } = useParams();
  const getAmmo = async () => {
    const res = await getAmmunitionById(id);
    setAmmo(res.data);
  };

  const handleChange = (event) => {
    setAmmo({
      ...ammo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateAmmunition(id, ammo);
    navigate(`/ammo/${id}`);
  };

  useEffect(() => {
    getAmmo();
  }, []);

  return (
    <div className="add-firearm-form-container">
      <AmmunitionForm
        ammo={ammo}
        cbHandleChange={handleChange}
        cbHandleSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditAmmunitionView;
