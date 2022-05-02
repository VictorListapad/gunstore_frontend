import { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../services/authService";
import "../../styles/FirearmStyles/EditView.css";
import { Link } from "react-router-dom";
const EditUsersView = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await getAllUsers();
    setUsers(res.data);
  };

  const handleDelete = async (id) => {
    const choice = window.confirm(`Are you sure you want to delete this user?`);
    if (!choice) {
      return;
    }
    await deleteUser(id);
  };
  useEffect(() => {
    getUsers();
  }, [users]);

  return (
    <div className="inventory-edit-container">
      <h1>Users</h1>
      <table className="mt-3 edit-table">
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <Link className="edit-btn btn" to={`/userEdit/${user._id}`}>
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="delete-btn btn"
                  onClick={() => handleDelete(user._id)}
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

export default EditUsersView;
