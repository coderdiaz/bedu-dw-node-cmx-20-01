// app.get('', permissions('admin', 'client', 'guests'), (req, res) => {})
// HOF -> High Order Function
const permissions = (...allowedRoles) => {
  // ['admin', 'client', 'guests']
  return (req, res, next) => {
    const { user } = req;
    // ['admin', 'client', 'guests'].includes('client')
    if (user && allowedRoles.includes(user.type)) {
      return next();
    }

    // HTTP Forbidden
    return res.status(403).json({
      message: 'Forbidden',
    });
  };
}


module.exports = permissions;
