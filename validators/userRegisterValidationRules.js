// validators/userValidator.js
const { body } = require('express-validator');

const userValidationRules = () => {
  return [
    body('email')
      .isEmail().withMessage('Valid email is required'),
    body('password')
      .notEmpty().withMessage('Password is required'),
    body('confirmpass')
      .notEmpty().withMessage('Confirm password is required')
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Passwords do not match');
        }
        return true;
      }),
  ];
};

module.exports = { userValidationRules };