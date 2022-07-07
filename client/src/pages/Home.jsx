import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  var token = localStorage.getItem("token");
  const handleClick = () => {
    // navigate ile login'e
    localStorage.removeItem("token");
navigate("/login")    //tokenı kaldırınca button log in olmuyor hemen
  };

  return (
    <div>
      <h1> This is the east side of the world</h1>
      <button onClick={handleClick}>
        {token ? "Log out" : "Go to Login Page"}
      </button>
    </div>
  );
};

export default Home;
