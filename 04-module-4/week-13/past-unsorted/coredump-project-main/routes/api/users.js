// register account handler
// Session id handling using jwt
// log in handler

const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { handleValidationErrors, asyncHandler} = require("../../utils");
const {getUserToken} = require('./auth');
const router = express.Router();
const db = require("../../db/models");
const { User } = db;


const validateEmailAndPassword = [
  check("userName")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a username"),
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  
];


//create user with hashedpassword
router.post(
    "/",
    validateEmailAndPassword,
    handleValidationErrors,
    asyncHandler(async (req, res) => {
      const { userName, email, password, avatar } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ userName, email, hashedPassword, avatar });
  
      const token = getUserToken(user);
      res.status(201).json({
        user: { id: user.id },
        token,
      });
    })
  );


router.post(
  "/token",
  validateEmailAndPassword,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });

	// Password validation and error handling
	if( !user || !user.validatePassword(password)) {
		const err = new Error("Login failed");
		err.status = 401;
		err.title = "Login failed";
		err.errors = ["The provided credentials were invalid."];
		return next(err);
	}	

    // Token generation
	const token = getUserToken(user);
	res.json({ token, user: {id: user.id}});
  })
);


module.exports = router;