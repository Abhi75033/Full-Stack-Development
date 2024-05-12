const express = require('express');

const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(express.json());

app.use('/api/users', require('./rotues.js'))

app.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost:3000');
});