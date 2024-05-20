const express = require('express');
const app = express();
const db = require("./db")

const port = process.env.PORT || 5001; // Changed to 5001

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});