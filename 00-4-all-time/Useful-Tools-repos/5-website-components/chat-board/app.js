const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.load();

// define environment variables
const database = process.env.DATABASE;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const localhost = process.env.LOCALHOST;
const db_name = process.env.DB_NAME;

// connects to postgresqly database
const connectionString = `${database}${db_user}:${db_pass}${localhost}${db_name}`;

// connects app to express
const app = express();

// connects bodyParser to app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// lets app know that static files (html and css) are in public directory
app.use(express.static('public'));
app.set('view engine', 'ejs');

// define/get root route
// then connect to postgresql database
// then promise returned re data transmission from database
// then promise returned in the form of a response object named result
// then that result object is passed into response from the server which 'results' in the
// rendering of the index page where the list of exising messages reside
app.get('/', (req, res) => {
    const client = new Client({
        connectionString: connectionString
    })
    client.connect()
        .then(() => {
            return client.query(`SELECT * FROM MESSAGES ORDER BY ID ASC`)
        })
        .then((result) => {
            // render index page
            return res.render('pages/index', {
                result
            })
        })
})

//render add-message page
app.get('/add-message', (req, res) => {
    return res.render('pages/add-message');
})

// add new message
app.post('/add', (req, res) => {
    const client = new Client({
        connectionString: connectionString
    })
    client.connect()
        .then(() => {
            let data = req.body;
            return client.query(`INSERT INTO messages (title, body) VALUES ($1, $2)`, [data.title, data.body])
            console.log('inserted a message.');
        })
        .then((result) => {
            return res.redirect('/')
        })
})


// delete message by id param
app.post('/delete/message/:id', ((req, res) => {
    const client = new Client({
        connectionString: connectionString
    })
    client.connect()
        .then(() => {
            return client.query(`DELETE FROM messages WHERE ID = $1`, [req.params.id])
        })
        .then((result) => {
            return res.redirect('/')
        })
}))

//render edit-message page
app.get('/edit-message', (req, res) => {
    return res.render('pages/edit-message');
})

// edit message by id param
app.get('/edit/message/:id', (req, res) => {
    const client = new Client({
        connectionString: connectionString
    })
    client.connect()
        .then(() => {
            return client.query(`SELECT * FROM messages WHERE id = $1`, [req.params.id])
        })
        .then((result) => {
            // render index page
            return res.render('pages/edit-message', {
                result
            })
        })
})

// update message so it renders to index page
app.post('/update', (req, res) => {
    const client = new Client({
        connectionString: connectionString
    })
    client.connect()
        .then(() => {
            return client.query(`UPDATE messages SET title=$1, body=$2 WHERE id=$3`, [req.body.title, req.body.body, req.body.id])
        })
        .then((result) => {
            return res.redirect('/')
        })
})

// app is connected to/running on port 3000
app.listen(3000, () => {
    console.log(`Server running on port 3000 `);
})