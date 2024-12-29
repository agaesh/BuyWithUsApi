import React, { useState } from "react";
import Menubar from './Menubar'
import InputGroup from "./InputGroup";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Registering with:");
    } else {
      console.log("Logging in with:");
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <Menubar/>
    <div className="container">
      <div className="logo">
        <h2>BUY<span style = {{color:"red"}}>WITHUS</span></h2>
      </div> 
      <p>{register ? "Create Seller Account" : "Login as Seller"}</p>
      <form onSubmit={handleSubmit}>
          <InputGroup label = {"Email"} type={"email"} id={"email"} value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <InputGroup label = {"Password"} type={"password"} id={"password"} value={password} onChange={(e) => setPassword(e.target.value)} required/>
        {register && (
            <div>
            <InputGroup 
              label={"Confirm Password"} 
              type={"password"} 
              id={"confirmPass"} 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required
            />
          </div>
        )}
        {!register && (
          <div style={{ textAlign: "right", marginTop: "10px" }}>
            <a 
              href="/forgot-password" 
              style={{ color: "#007BFF", textDecoration: "none", fontSize: "14px", marginTop:"10px"}}
            >
              Forgot Password?
            </a>
          </div>
        )}
        <button type="submit" className="formButton">
          {register ? "Register" : "Login"}
        </button>
      </form>
      <a
        style={{
          cursor: "pointer",
          color: "gray",
          fontSize: "15px",
          margin:"12",
          textDecoration: "underline",
        }}
        onClick={handleProcess}
      >
        {register ? "Switch to Login" : "Switch to Register"}
      </a>
    </div>
    </>
  );
};

export default LoginPage;
