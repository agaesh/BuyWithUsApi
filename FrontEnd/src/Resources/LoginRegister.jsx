import React, { useState } from "react";
import '../assets/css/InputGroup.css'
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
          <InputGroup label = {"Email"} type={"email"} id={"email"} value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <InputGroup label = {"Password"} type={"email"} id={"email"} value={email} onChange={(e) => setEmail(e.target.value)} required/>
        {register && (
          <InputGroup label={"Confirm Password"} type={"password"} id={"confirmPass"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        )}
        <button type="submit" className="formButton">
          {register ? "Register" : "Login"}
        </button>
      </form>
      <a
        style={{
          cursor: "pointer",
          color: "blue",
          textDecoration: "underline",
        }}
        onClick={handleProcess}
      >
        {register ? "Switch to Login" : "Switch to Register"}
      </a>
    </div>
  );
};

export default LoginPage;