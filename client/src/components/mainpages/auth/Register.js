import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../../redux/action/ActionAuth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const addUser = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <div className="login-page">
      <form >
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          type="password"
          name="password"
          required
          autoComplete="on"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <div className="row">
          <button onClick={addUser} type="submit">Register</button>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
