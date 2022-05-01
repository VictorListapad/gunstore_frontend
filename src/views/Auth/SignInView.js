import { useState } from "react";
import { useNavigate } from "react-router";
import { signinUser } from "../../services/authService";
import "../../styles/SignForm.css";
const SignInView = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await signinUser(user);
    setUser({
      email: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <div className="sign-form-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="sign-form">
        <label htmlFor="sign-email">Email</label>
        <input
          type="email"
          className="form-control"
          id="sign-email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <label htmlFor="sign-password">Password</label>
        <input
          type="password"
          className="form-control"
          id="sign-password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInView;
