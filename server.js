const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001; // Backend on 3001

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend server running on http://0.0.0.0:${port}`);
});
