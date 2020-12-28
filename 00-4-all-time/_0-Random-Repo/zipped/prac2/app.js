/**
 * TODO: Create and configure your Express.js application in here.
 *       You must name the variable that contains your Express.js
 *       application "app" because that is what is exported at the
 *       bottom of the file.
 */

const express = require('express')
const csrf = require('csurf')
const app = express()

const csrfProtection = csrf({cookies: true})

app.use(express.urlencoded())

app.set('view engine', 'pug')

app.get('/pasta/create', csrfProtection ,(req, res) => {

})

app.use((req, res, next) => {
  req.setTimeout(1000, () => {
    res.status(500).end();
  });
  res.setTimeout(1000, () => {
    res.status(500).end();
  });
  next();
});

const port = 8081

app.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})



/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}
