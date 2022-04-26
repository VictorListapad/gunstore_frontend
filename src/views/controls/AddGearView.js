import { useState } from "react";
import { useNavigate } from "react-router";
import GearForm from "../../components/Gear/GearForm";
import { createGear } from "../../services/gearService";
import "../../styles/FirearmStyles/AddForm.css";

const AddGearView = () => {
  const [newGear, setNewGear] = useState({
    preciseType: "",
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
  const navigate = useNavigate();

  function handleChange(event) {
    if (event.target.name === "preciseType") {
      setNewGear({
        preciseType: event.target.value,
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
    } else {
      setNewGear({
        ...newGear,
        [event.target.name]: event.target.value,
      });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await createGear(newGear);
    navigate("/gear");
  }

  return (
    <div className="add-firearm-form-container">
      <form onSubmit={handleSubmit} className="form-control firearm-form">
        <h1>Add Gear</h1>
        <label htmlFor="gear-type">
          Choose Gear Type <span>*</span>
        </label>
        <select
          className="form-control"
          name="preciseType"
          id="gear-type"
          onChange={handleChange}
          defaultValue={newGear.preciseType}
          required
        >
          <option value="" disabled>
            Choose Gear Type
          </option>
          <option value="Knife">Knife</option>
          <option value="Holster">Holster</option>
          <option value="Vest">Vest</option>
        </select>
        <GearForm gear={newGear} cbHandleChange={handleChange} />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddGearView;
