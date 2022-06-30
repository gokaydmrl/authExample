import React from "react";
import { useState } from "react";
import RegisterInputs from "../components/RegisterInputs";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    fName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hi");

    try {
      const response = await axios.post("http://localhost:3001/register", user);
      return response.data;
    } catch (error) {
      if (error.response) {
        return setErrors(error.response.data);
      }
    }
    console.log("this is user", user);
    setUser({
      fName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <RegisterInputs
        user={user}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
      />
    </div>
  );
};

export default Register;
