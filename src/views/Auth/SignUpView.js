import { useState } from "react";
import { useNavigate } from "react-router";
import { signinUser, signupUser } from "../../services/authService";
import "../../styles/SignForm.css";
const SignUpView = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
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
    const res = await signupUser(user);
    signinUser(user);
    setUser({
      name: "",
      username: "",
      email: "",
      password: "",
    });
    navigate("/");
  };
  return (
    <div className="sign-form-container">
      <form className="sign-form form-control" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="sign-name">Name</label>
        <input
          type="text"
          className="form-control"
          id="sign-name"
          name="name"
          placeholder="name"
          onChange={handleChange}
          required
        />
        <label htmlFor="sign-username">Username</label>
        <input
          type="text"
          className="form-control"
          id="sign-username"
          name="username"
          placeholder="username"
          onChange={handleChange}
          required
        />
        <label htmlFor="sign-email">email</label>
        <input
          type="email"
          className="form-control"
          id="sign-email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          required
        />
        <label htmlFor="sign-password">password</label>
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpView;
