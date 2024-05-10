const express = require('express');
const app = express();

// Middleware untuk mengizinkan CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Endpoint yang diizinkan
app.get('/data', (req, res) => {
  res.json({ message: 'Data yang diambil dari domain lain' });
});

// Jalankan server
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});
