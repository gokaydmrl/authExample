import React from "react";
import { useState } from "react";
import RegisterInputs from "../components/RegisterInputs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  // const token = localStorage.getItem("token");
  // console.log("this token", token);

  const [user, setUser] = useState({
    fName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  // console.log("letssee", errors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this is user", user);

    try {
      if (user.password.length < 6) {
        alert("psw 6 ch");
        return;
      }

      const response = await axios.post("http://localhost:3001/register", user);
      if (response.status === 201) {
        const token = response.headers.authorization.split(" ")[1];
        //   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem("token", JSON.stringify(token));

        console.log("ax def headers", axios.defaults.headers);

        console.log("axios resp", response);

        console.log("cmon", axios.defaults.headers.common);
        console.log("token", token);
        console.log("rsp data", response.data);
        navigate("../home", { replace: true });
      }
      setUser(response.data);
    } catch (error) {
      if (error.response) {
        console.log("eğğ", error.response.data.errorsObject);
        return setErrors(error.response.data.errorsObject);
      }
      console.log("this error", error);
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
        password={user.password}
      />
    </div>
  );
};

export default Register;
