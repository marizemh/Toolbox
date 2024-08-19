// backend/routes/files.js

const express = require('express');
const { getFilesData, getFileList } = require('../controllers/filesController');

const router = express.Router();

router.get('/data', getFilesData);
router.get('/list', getFileList); // Punto opcional

module.exports = router;
