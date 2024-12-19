import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleProcess = () => {
    setRegister((prev) => !prev); // Toggle the `register` state
    setConfirmPassword(""); // Clear confirmPassword when toggling
  };


  return (
    <div>
      <h2>{register ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {register && (
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">{register ? "Register" : "Login"}</button>
      </form>
      <a
        style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
        onClick={handleProcess}
      >
        {register ? "Switch to Login" : "Switch to Register"}
      </a>
    </div>
  );
};

export default LoginPage;