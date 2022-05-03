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
    console.log(user._id);
    setUser({
      email: "",
      password: "",
    });
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="sign-form-container">
      <form onSubmit={handleSubmit} className="sign-form form-control">
        <h1>Sign In</h1>
        <label htmlFor="sign-email">Email</label>
        <input
          type="email"
          className="form-control"
          id="sign-email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          required
        />
        <label htmlFor="sign-password">Password</label>
        <input
          type="password"
          className="form-control"
          id="sign-password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          required
        />
        <button className="btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInView;
