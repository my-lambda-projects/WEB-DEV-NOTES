const express = require("express");
const faker = require("faker");
const path = require("path");
const bodyParser = require("body-parser");
//body-parser and static are middleware.
const app = express();
app.use(bodyParser.json()); //app.use(bodyParser.json()) sets up the bodyParser middleware to process data in HTTP requests into a JSON object that can then be used in the routes.
app.use(express.static("public")); //app.use(express.static('public')) sets up the static middleware. In this example, this allows the Express server to serve any static assets that are located in the public directory. Some examples of static assets include images, html documents, or CSS files.

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
}); // GET request to / would invoke the callback function with res.sendFile(path.join(__dirname + "/public/index.html")); in it.

app.get("/names", (req, res) => {
  const randomName = faker.name.findName();
  res.json({ name: randomName });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
