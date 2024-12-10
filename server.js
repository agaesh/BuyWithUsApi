const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Set up the server to listen on a port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});