const express = require("express");
const { cookieParser, users, port } = require("./routes/utils");
const simpleFormRouter = require("./routes/basic-form");
const interestingFormRouter = require("./routes/interesting-form");

const app = express();
app.set("view engine", "pug");
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/create", simpleFormRouter);
app.use("/create-interesting", interestingFormRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "Formative Forms", users });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
