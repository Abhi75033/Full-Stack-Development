const express = require('express');

const app = express();

app.use(express.json());

app.use('/api/users', require('./rotues.js'))

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});