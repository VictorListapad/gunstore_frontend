import { useEffect, useState } from "react";
import { deletePistol, getAllPistols } from "../../services/pistolService";
import { deleteRifle, getAllRifles } from "../../services/rifleService";
import { Link } from "react-router-dom";
import "../../styles/FirearmStyles/EditView.css";
const EditView = () => {
  const [inventory, setInventory] = useState([]);
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
  };
  useEffect(() => {
    getAllProducts();
  }, [inventory]);

  return (
    <div className="inventory-edit-container">
      <h1>Inventory</h1>
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
