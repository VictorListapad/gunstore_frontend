import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import EditRifleForm from "../../components/Rifles/EditRifleForm";
import { editRifle, getRifleById } from "../../services/rifleService";

const EditRifleView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [rifle, setRifle] = useState({
    model: "",
    manufacturer: "",
    description: "",
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
  const getRifle = async () => {
    const res = await getRifleById(id);
    setRifle(res.data);
  };

  useEffect(() => {
    getRifle();
  }, []);

  const handleChange = (event) => {
    setRifle({
      ...rifle,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await editRifle(id, rifle);
    navigate(`/rifle/${id}`);
  };
  return (
    <div className="add-firearm-form-container">
      <EditRifleForm
        rifle={rifle}
        cbHandleChange={handleChange}
        cbHandleSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditRifleView;
