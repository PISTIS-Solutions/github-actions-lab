const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from your Node.js app!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});