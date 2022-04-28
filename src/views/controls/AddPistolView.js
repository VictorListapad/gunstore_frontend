import { useState } from "react";
import { useNavigate } from "react-router";
import PistolForm from "../../components/Pistols/PistolForm";
import { createPistol } from "../../services/pistolService";
import "../../styles/FirearmStyles/AddForm.css";
const AddPistolView = () => {
  const [newPistol, setNewPistol] = useState({
    model: "",
    newProduct: "",
    manufacturer: "",
    shortDescription: "",
    fullDescription: "",
    features: "",
    availability: "",
    sku: "",
    caliber: "",
    magsIncluded: "",
    sights: "",
    statesCompliant: "",
    threadedBarrel: "",
    size: "",
    overallLength: "",
    overallWidth: "",
    height: "",
    barrelLength: "",
    weight: "",
    sightRadius: "",
    accessoryRail: "",
    triggerAction: "",
    triggerType: "",
    gripModule: "",
    gripType: "",
    gripColor: "",
    barrelMaterial: "",
    frameFinish: "",
    frameMaterial: "",
    fcuFinish: "",
    fcuMaterial: "",
    slideFinish: "",
    slideMaterial: "",
    manualSafety: "",
    opticReady: "",
    price: 0,
    titleImg: "",
    extraImg1: "",
    extraImg2: "",
    extraImg3: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setNewPistol({
      ...newPistol,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await createPistol(newPistol);
    navigate("/pistols");
  }
  return (
    <div className="add-firearm-form-container">
      <PistolForm
        pistol={newPistol}
        cbHandleChange={handleChange}
        cbHandleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddPistolView;
