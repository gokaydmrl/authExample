import React from "react";

const RegisterInputs = ({
  user,
  handleSubmit,
  handleChange,
  errors,
}) => {
  return (
    <div>
      <h3>welcome to mashriq</h3>
      <br />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          placeholder="your name"
          type="text"
          name="fName"
          value={user.fName}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors["fName"] && <p className="alert">{errors["fName"]}</p>}
        <br />
        <br />
        <input
          placeholder="email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors["email"] && <p className="alert">{errors["email"]}</p>}
        <br />
        <br />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors["password"] && <p className="alert">{errors["password"]}</p>}
        <br />
        {/* {user.password < 6 && "password sh 6 characters"} */}
        <br />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterInputs;
