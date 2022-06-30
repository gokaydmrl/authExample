import React from "react";

const RegisterInputs = ({ user, handleSubmit, handleChange, errors }) => {
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
      <p>{JSON.stringify(errors)}</p>
    </div>
  );
};

export default RegisterInputs;
