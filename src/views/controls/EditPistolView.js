import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import PistolForm from "../../components/Pistols/PistolForm";
import { editPistol, getPistolById } from "../../services/pistolService";

const EditPistolView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pistol, setPistol] = useState({
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
  const getPistol = async () => {
    const res = await getPistolById(id);
    setPistol(res.data);
  };

  useEffect(() => {
    getPistol();
  }, []);

  const handleChange = (event) => {
    setPistol({
      ...pistol,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await editPistol(id, pistol);
    navigate(`/pistol/${id}`);
  };
  return (
    <div className="add-firearm-form-container">
      <PistolForm
        pistol={pistol}
        cbHandleChange={handleChange}
        cbHandleSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditPistolView;
