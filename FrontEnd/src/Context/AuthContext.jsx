import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';  // Assuming you've correctly set up Firebase
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { ClipLoader } from 'react-spinners';  // Import the spinner component

// Create Context
const AuthContext = createContext();

// Custom hook to use the Auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);  // Set loading to false when authentication status is determined
    });

    return unsubscribe;  // Cleanup the listener on component unmount
  }, []);

  // Sign Up method
  const SignUpUsingEmailPassword = async (email, password) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error(error.message);  // Re-throw the error for the component to catch
    }
  };

  // Login method
  const login = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error(error.message);  // Re-throw the error for the component to catch
    }
  };

  // Logout method
  const logout = async () => {
    try {
      return await signOut(auth);
    } catch (error) {
      throw new Error(error.message);  // Re-throw the error for the component to catch
    }
  };

  const value = {
    currentUser,
    SignUpUsingEmailPassword,
    login,
    logout,
  };

  // Provide the context value to children
  return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
  );
};
