const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });

    next();
  });
}

module.exports = authenticate;
