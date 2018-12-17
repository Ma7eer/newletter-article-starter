const express = require('express'); // import express

// initialize express application
const app = express();

// pick a local port (any will do)
const port = 5000;

// listen for the server and let us know if it is running
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});