// backend/app.js
require('dotenv').config();

const express = require('express');
const filesRoutes = require('./routes/files');

const app = express();
const port = process.env.PORT || 3000;

app.use('/files', filesRoutes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
