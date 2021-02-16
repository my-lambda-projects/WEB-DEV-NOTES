const { check } = require("express-validator");

const validateData = [
  check("password")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long")
    .matches(/\d/)
    .withMessage("must contain a number"),
  check("age").exists({ checkFalsy: true }).withMessage("is required"),
  check("age").isInt({ min: 0, max: 120 }).withMessage("must be a valid age"),
  check("favoriteBeatle")
    .exists({ checkFalsy: true })
    .withMessage("is required"),
  check("favoriteBeatle")
    .isIn(["John", "Paul", "Ringo", "George"])
    .withMessage("must be a real Beatle member"),
];

module.exports = validateData;
