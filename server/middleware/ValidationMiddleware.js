const { validationResult } = require('express-validator');

function ValidationMiddleware(req, res, next) {
  const result = validationResult(req);
  if (result.isEmpty()) {
    next();
  } else {
    res.status(422).json({
      status: 422,
      message: result.array()
    });
  }
}
module.exports = ValidationMiddleware;
