const express = require("express");
const router = express.Router();
const { csurfProtection, validateForm, users } = require("./utils");

router.get("/", csurfProtection, (req, res) => {
  res.render("basic-form", {
    title: "User Form",
    messages: [],
    csrfToken: req.csrfToken(),
  });
});

router.post("/", csurfProtection, validateForm, (req, res) => {
  const { firstName, lastName, email, password, confirmedPassword } = req.body;
  const errors = req.errors;

  if (req.errors.length > 0) {
    res.render("basic-form", {
      messages: errors,
      firstName,
      lastName,
      email,
      csrfToken: req.csrfToken(),
    });
    return;
  }

  const user = {
    id: users.length + 1,
    firstName,
    lastName,
    email,
  };

  users.push(user);
  res.redirect("/");
});

module.exports = router;
