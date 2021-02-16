const express = require("express");
const router = express.Router();
const {
  csurfProtection,
  validateForm,
  validateData,
  validationResult,
  users,
} = require("./utils");

router.get("/", csurfProtection, (req, res) => {
  res.render("interesting-form", {
    title: `Create an interesting user`,
    messages: [],
    csrfToken: req.csrfToken(),
  });
});

router.post("/", csurfProtection, validateForm, validateData, (req, res) => {
  const validatorErrors = validationResult(req).errors.map(
    ({ msg, param }) => `${param} ${msg}`
  );
  const errors = req.errors.concat(validatorErrors);

  if (errors.length > 0) {
    res.render("interesting-form", {
      title: "Create an interesting user",
      ...req.body,
      csrfToken: req.csrfToken(),
      messages: errors,
    });
    return;
  }

  const {
    firstName,
    lastName,
    email,
    favoriteBeatle,
    iceCream,
    age,
  } = req.body;

  users.push({
    id: users.length + 1,
    firstName,
    lastName,
    email,
    favoriteBeatle,
    iceCream: iceCream === "on",
    age,
  });
  res.redirect("/");
});

module.exports = router;
