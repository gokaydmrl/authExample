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
  console.log("letssee", errors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit denendi");
    console.log("this is user", user);

    try {
      const response = await axios.post("http://localhost:3001/register", user);
      setUser(response.data);
    } catch (error) {
      if (error.response) {
        console.log("eğğ", error.response.data.errorsObject);
        return setErrors(error.response.data.errorsObject);
      }
    }
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
