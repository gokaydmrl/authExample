import React from "react";

const LoginInputs = ({ user, handleSubmit, handleChange}) => {
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          autoComplete="off"
        />
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
        <button>Register</button>
      </form>
    </div>
  );
};

export default LoginInputs;
