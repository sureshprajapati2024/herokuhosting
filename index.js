// ./index.js
//---------------------------------------------------------
// Import Express
const express = require('express');

// Create An Express Application
// We may have several Express applications in a project.
const index = express();

// Create A Route Handlernode index.js
index.get('/', (req, res) => {
  res.send({hi: 'there'});
});

// Listen to port 5000
index.listen(5000);