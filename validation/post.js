const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { mix: 10, max: 300 })) {
    errors.email = 'Password must be in the range 10-300 characters';
  }

  if (!Validator.isEmpty(data.text)) {
    errors.email = 'Post text is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
