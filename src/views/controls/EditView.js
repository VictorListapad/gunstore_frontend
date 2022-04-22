import { useEffect, useState } from "react";
import { deletePistol, getAllPistols } from "../../services/pistolService";
import { deleteRifle, getAllRifles } from "../../services/rifleService";
import { Link } from "react-router-dom";
import "../../styles/FirearmStyles/EditView.css";
import Search from "../../components/Search";
const EditView = () => {
  const [inventory, setInventory] = useState([]);
  const [value, setValue] = useState("all");
  const getAllProducts = async () => {
    const rifles = await getAllRifles();
    const pistols = await getAllPistols();
    setInventory([...rifles.data, ...pistols.data]);
  };
  const handleDelete = async (itemType, id) => {
    const choice = window.confirm(`Are you sure you want to delete this item?`);
    if (itemType === "rifle") {
      if (!choice) {
        return;
      }
      await deleteRifle(id);
    } else if (itemType === "pistol") {
      if (!choice) {
        return;
      }
      await deletePistol(id);
    }
    getAllProducts();
  };
  const handleSearch = (modelStr) => {
    if (!modelStr) {
      getAllProducts();
      setValue(`all`);
    } else {
      const filtered = inventory.filter((item) =>
        item.model.toLowerCase().includes(modelStr.toLowerCase())
      );
      setInventory(filtered);
    }
  };
  const getPistols = async () => {
    const res = await getAllPistols();
    setInventory(res.data);
  };
  const getRifles = async () => {
    const res = await getAllRifles();
    setInventory(res.data);
  };
  const radioCheckHandler = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (value === "rifle") {
      getRifles();
    } else if (value === "pistol") {
      getPistols();
    } else {
      getAllProducts();
    }
  }, [value]);
  return (
    <div className="inventory-edit-container">
      <h1>Inventory</h1>
      <Search search={handleSearch} />
      <div className="radio-btns-container">
        <label htmlFor="all">All</label>
        <input
          className="radio-btn"
          type="radio"
          name="type"
          value="all"
          id="all"
          onChange={radioCheckHandler}
          checked={value === "all"}
        />
        <label htmlFor="pistol">Pistols</label>
        <input
          className="radio-btn"
          type="radio"
          name="type"
          value="pistol"
          id="pistol"
          onChange={radioCheckHandler}
          checked={value === "pistol"}
        />
        <label htmlFor="rifle">Rifles</label>
        <input
          className="radio-btn"
          type="radio"
          name="type"
          value="rifle"
          id="rifle"
          onChange={radioCheckHandler}
          checked={value === "rifle"}
        />
      </div>
      <table className="mt-3 edit-table">
        <tbody>
          {inventory.map((item, index) => (
            <tr key={item._id}>
              <td>
                <img src={item.titleImg} alt={item.model} />
              </td>
              <td>{item.model}</td>
              <td>
                <Link
                  className="edit-btn btn"
                  to={`/${item.type}Edit/${item._id}`}
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="delete-btn btn"
                  onClick={() => handleDelete(item.type, item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditView;
