import axios from "axios";
import React from "react";
import LoginInputs from "../components/LoginInputs";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log("this login user", user);
      
try {
    const response = await axios.post("http://localhost:3001/login", user)
    if (response.status === 201) {
        localStorage.setItem("token", JSON.stringify(response.data["token"]));
        const token = localStorage.getItem("token");
         console.log("rsp data token",response.data.token)
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        console.log("token", token);
        console.log("rsp data", response.data);
        console.log("tkn", token);
        navigate("../home", { replace: true });
    }
    setUser(response.data)
} catch (error) {
    console.log(error);
}

    setUser({
     email: "", password: "",
    });
      
  };

  return (
    <div>
      <LoginInputs
        user={user}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Login;
