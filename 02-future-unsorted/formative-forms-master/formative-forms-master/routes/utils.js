const csrf = require("csurf");
const cookieParser = require("cookie-parser");
const csurfProtection = csrf({ cookie: true });
const { validationResult, check } = require("express-validator");
const validateForm = require("../validators/basic-validator");
const validateData = require("../validators/validator-data");

const port = process.env.PORT || 3000;

const users = [
  {
    id: 1,
    firstName: "Jill",
    lastName: "Jack",
    email: "jill.jack@gmail.com",
  },
];

module.exports = {
  cookieParser,
  csurfProtection,
  validationResult,
  validateForm,
  validateData,
  check,
  users,
  port,
};
