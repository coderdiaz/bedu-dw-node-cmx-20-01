const express = require('express');
const cors = require('cors');
const app = express();

const APP_PORT = 3001;

app.use(cors({
  origin: ['http://127.0.0.1:8080'],
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  return res.json({
    message: 'Welcome to my API',
  });
});

// Loading the API routes
app.use('/api', require('./routes'));

app.listen(APP_PORT, () => {
  console.log(`Express on port ${APP_PORT}`);
});

