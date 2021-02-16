// Set up jwt
const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../../config");
const { secret, expiresIn } = jwtConfig;

// Set up bearerToken for session save state.
const bearerToken = require('express-bearer-token');
const db = require("../../db/models");
const { User } = db;

// Function to retrieve the token created with associated user.
const getUserToken = (user) => {
	const userDataForToken = {
		id: user.id,
		email: user.email
	}

	// Creating the token
	const token = jwt.sign(
		{data: userDataForToken},
		secret,
		// Expires in 1 week
		{expiresIn: parseInt(expiresIn, 10)}
	)

	return token;
};

const restoreUser = (req, res, next) => {
  const { token } = req;

  if (!token) {
    return res.set("WWW-Authenticate", "Bearer").status(401).end();
  }

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    // Define asynchronous function for jwtPayload logic
	if (err) {
		err.status = 401;
		return next(err);
	}

	const {id} = jwtPayload.data;

	try {
	  req.user = await User.findByPk(id);
	} catch (e) {
	  return next(e);
	}

	if (!req.user) {
		return res.set("WWW-Authenticate", "Bearer").status(401).end();
	}

	return next();
  });
};

//
const requireAuth = [bearerToken(), restoreUser];


module.exports = {
	getUserToken,
	requireAuth
}