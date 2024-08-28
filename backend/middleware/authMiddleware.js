const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Middleware logic for authentication (if needed)
  next();
};

module.exports = authMiddleware;
