const express = require('express');
const app = express();

const APP_PORT = 3001;

app.get('/', (req, res) => {
  return res.json({
    message: 'Welcome to my API',
  });
});

app.listen(APP_PORT, () => {
  console.log(`Express on port ${APP_PORT}`);
});

