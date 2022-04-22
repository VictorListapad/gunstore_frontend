import { useState } from "react";
import { useNavigate } from "react-router";
import AddRifleForm from "../../components/Rifles/AddRifleForm";
import { createRifle } from "../../services/rifleService";
import "../../styles/FirearmStyles/AddForm.css";

const AddRifleView = () => {
  const [rifle, setRifle] = useState({
    model: "",
    manufacturer: "",
    shortDescription: "",
    fullDescription: "",
    availability: "",
    sku: "",
    caliber: "",
    magsIncluded: "",
    magType: "",
    actionType: "",
    statesCompliant: "",
    stockType: "",
    barrelLength: "",
    barrelMaterial: "",
    triggerType: "",
    twistRate: "",
    forendType: "",
    gripType: "",
    receiverFinish: "",
    overallLength: "",
    overallWidth: "",
    height: "",
    weight: "",
    threads: "",
    accessoryRail: "",
    operatingSystem: "",
    price: 0,
    titleImg: "",
    extraImg1: "",
    extraImg2: "",
    extraImg3: "",
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    setRifle({
      ...rifle,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createRifle(rifle);
    navigate("/rifles");
  };
  return (
    <div className="add-firearm-form-container">
      <AddRifleForm
        newRifle={rifle}
        cbHandleChange={handleChange}
        cbHandleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddRifleView;
