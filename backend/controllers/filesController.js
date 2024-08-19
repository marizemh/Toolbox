// backend/controllers/filesController.js
const axios = require('axios');

const API_BASE_URL = process.env.API_BASE_URL || 'https://echo-serv.tbxnet.com/v1/secret';
const API_KEY = process.env.API_KEY || 'Bearer aSuperSecretKey';

async function getFilesData(req, res) {
  const { fileName } = req.query;

  try {
    const fileResponse = await axios.get(`${API_BASE_URL}/files`, {
      headers: { Authorization: API_KEY },
    });

    const fileNames = fileResponse.data.files.filter(file => !fileName || file === fileName);
    const filesData = await Promise.all(
      fileNames.map(async (fileName) => {
        try {
          const fileData = await axios.get(`${API_BASE_URL}/file/${fileName}`, {
            headers: { Authorization: API_KEY },
          });

          const lines = fileData.data.split('\n').slice(1)
            .filter(line => line.split(',').length === 4)
            .map(line => {
              const [file, text, number, hex] = line.split(',');
              return { text, number: parseInt(number, 10), hex };
            });

          return { file: fileName, lines };
        } catch (error) {
          return null;
        }
      })
    );

    res.json(filesData.filter(file => file !== null));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch files' });
  }
}

async function getFileList(req, res) {
  try {
    const response = await axios.get(`${API_BASE_URL}/files`, {
      headers: { Authorization: API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch file list' });
  }
}

module.exports = { getFilesData, getFileList };
