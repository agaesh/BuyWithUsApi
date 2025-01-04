// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQprE23_sdCAW7XjMSfg2S8kr6q-V-3wo",
  authDomain: "buywithus-dec78.firebaseapp.com",
  projectId: "buywithus-dec78",
  storageBucket: "buywithus-dec78.firebasestorage.app",
  messagingSenderId: "752168069870",
  appId: "1:752168069870:web:4756abc72b23fcd91c61ff",
  measurementId: "G-9WFZ68FE3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fire = getFirestore(app);

// Export the initialized app and Firestore reference
export { app, auth ,fire };
