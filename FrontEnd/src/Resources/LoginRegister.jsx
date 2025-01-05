/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import Menubar from './Menubar'
import InputGroup from "./InputGroup";
import '../assets/css/InputGroup.css'
import { useAuth } from '../Context/AuthContext'; // Import useAuth from AuthContext
import { ClipLoader } from 'react-spinners';
import SpinnerContainer from "../Resources/SpinnerContainer"; // Import the spinner component
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [RegisterSucess, setRegisterSucess] = useState(false);
  const {login, SignUpUsingEmailPassword } = useAuth(); // Destructure useAuth to get SignUpUsingEmailPassword and login
  const navigate = useNavigate(); // Import useNavigate from react-router-dom
  // Import useAuth from App.jsx
  
  const handleProcess = () => {
    setRegister((prev) => !prev); // Toggle the `register` state
    setConfirmPassword(""); // Clear confirmPassword when toggling
  };
  const [loading, setLoading] = useState(false); // State to manage loading spinner
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show spinner when the process starts
    if (register) {
      if(email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields!");
        setLoading(false); // Hide spinner if there's an error
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        setLoading(false); // Hide spinner if there's an error
        return;
      }
       
      await SignUpUsingEmailPassword(email, password)
        .then(() => {
          setRegisterSucess(true);
        })
        .catch((error) => {
          console.error("Error during registration:", error);
          alert("Registration failed. Please try again.");
        })
        .finally(() => {
          setLoading(false); // Hide spinner after the process is complete
        });
    } else {
      console.log("Logging in with:");
      setLoading(false); // Hide spinner after the process is complete
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  useEffect(() => {
    if (RegisterSucess) {
      setTimeout(() => {
        // Instead of using window.location.href, use navigate to redirect
        navigate("/account-setup");  // Navigate to account-setup page
      }, 2000); // Wait 2 seconds before redirecting
    }
  }, [RegisterSucess, navigate]); // useEffect depends on RegisterSucess

  return (
    <>
      <Menubar/>
      <SpinnerContainer loading={loading}>
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
    </SpinnerContainer>
    </>
  );
};

export default LoginPage;
