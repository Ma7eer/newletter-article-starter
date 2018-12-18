const express = require('express'); // import express
const cron = require('node-cron'); // import node-cron

// initialize express application
const app = express();

// schedule a task using node-cron
cron.schedule('*/5 * * * * *', () => {
  console.log('I am a script that runs every 5 seconds!');
});

// pick a local port (any will do)
const port = 5000;

// listen for the server and let us know if it is running
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});