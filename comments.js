// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file that you created in the previous exercise. You should also serve the comments.js file as a static file for the client-side JavaScript code to use.

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'comments.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});