/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Resources/LoginRegister';
import DashBoard from './Resources/Dashboard';
import AccountSetup from './Resources/AccountSetup';
import { AuthProvider, useAuth } from './Context/AuthContext';
import './App.css';


const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" />;
};

const NotFound = () => {
  return (
    <div className="not-found-container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="logo">
        <h2>
          BUY<span style={{ color: "red" }}>WITHUS</span>
        </h2>
      </div>
      <div className="message">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="home-button">Return to Home</a>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<PrivateRoute><DashBoard activePage={"dashboard"} /></PrivateRoute>} />
          <Route path="/account-setup" element={<PrivateRoute><AccountSetup /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;