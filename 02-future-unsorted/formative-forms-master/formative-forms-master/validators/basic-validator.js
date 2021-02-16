const validateForm = (req, res, next) => {
  const { firstName, lastName, email, password, confirmedPassword } = req.body;

  const errors = [];

  if (!firstName) {
    errors.push("Please provide a first name.");
  }
  if (!lastName) {
    errors.push("Please provide a last name.");
  }
  if (!email) {
    errors.push("Please provide an email.");
  }
  if (!password) {
    errors.push("Please provide a password.");
  }
  if (password !== confirmedPassword) {
    errors.push(
      "The provided values for the password and password confirmation fields did not match."
    );
  }

  req.errors = errors;
  next();
};

module.exports = validateForm;
