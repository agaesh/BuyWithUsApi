
const express = require('express');
const app = express();
const {fire:fire} = require("./firebase");
const { addDoc, collection } = require("firebase/firestore");
const userRoute = require("./routes/userRoutes");

// Middleware to parse JSON requests
app.use(express.json());

// Mount user routes
app.use('/api/users', userRoute);
// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Set up the server to listen on a port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});