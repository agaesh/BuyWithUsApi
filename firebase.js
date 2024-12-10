import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);