const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 1, max: 300 })) {
    errors.text = 'Password must be in the range 10-300 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Post text is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
