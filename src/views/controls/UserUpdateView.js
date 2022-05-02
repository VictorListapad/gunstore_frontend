import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getUserById, updateUser } from "../../services/authService";

const UserUpdateView = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    role: "",
  });
  const { id } = useParams();
  const getUser = async () => {
    const res = await getUserById(id);
    setUser(res.data);
  };

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUser(user, id);
    navigate(`/editUsers`);
    setUser({
      name: "",
      username: "",
      role: "",
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="form-control firearm-form">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        className="form-control"
        onChange={handleChange}
        value={user.name}
        required
      />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        className="form-control"
        onChange={handleChange}
        value={user.username}
        required
      />
      <label htmlFor="role">Role</label>
      <select
        name="role"
        id="role"
        className="form-control"
        onChange={handleChange}
        defaultValue={user.role}
        required
      >
        <option value="" disabled>
          Select Role
        </option>
        <option value="USER">User</option>
        <option value="MODERATOR">Moderator</option>
        <option value="ADMIN">Admin</option>
      </select>
      <button className="btn edit-btn">Submit</button>
    </form>
  );
};

export default UserUpdateView;
