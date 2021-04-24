const jwt = require('jsonwebtoken');
const sequelize = require('../db');

const authenticate = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, 'secretkey', async (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });

    // console.log(decoded);
    req.user = await sequelize.models.users.findByPk(decoded.id);

    next();
  });
}

module.exports = authenticate;
