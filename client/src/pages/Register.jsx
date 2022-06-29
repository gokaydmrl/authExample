import React from "react";
import { useState } from "react";
import { createUserAction } from "../actions/createUserAction";

const Register = () => {
  const [user, setUser] = useState({
    fName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    createUserAction(user);
    console.log("this is user", user);
    setUser({
      fName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          placeholder="your name"
          type="text"
          name="fName"
          value={user.fName}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          placeholder="email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          autoComplete="off"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
