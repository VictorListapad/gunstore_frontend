import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import GearForm from "../../components/Gear/GearForm";
import { getGearById, updateGear } from "../../services/gearService";

const EditGearView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [gear, setGear] = useState({
    model: "",
    newProduct: "",
    manufacturer: "",
    features: "",
    availableSizes: "",
    shortDescription: "",
    fullDescription: "",
    availability: "",
    overallLength: "",
    overallWidth: "",
    weight: "",
    protectionLevel: "",
    attachmentType: "",
    battery: "",
    material: "",
    color: "",
    price: 0,
    titleImg: "",
    extraImg1: "",
    extraImg2: "",
    extraImg3: "",
  });
  const getGear = async () => {
    const res = await getGearById(id);
    setGear(res.data);
  };

  const handleChange = (event) => {
    setGear({
      ...gear,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateGear(id, gear);
    navigate(`/item/${id}`);
  };

  useEffect(() => {
    getGear();
  }, []);

  return (
    <div className="add-firearm-form-container">
      <form onSubmit={handleSubmit} className="form-control firearm-form">
        <h1>Edit {`${gear.preciseType}`}</h1>
        <GearForm gear={gear} cbHandleChange={handleChange} />
        <button className="btn edit-btn">Submit</button>
      </form>
    </div>
  );
};

export default EditGearView;
