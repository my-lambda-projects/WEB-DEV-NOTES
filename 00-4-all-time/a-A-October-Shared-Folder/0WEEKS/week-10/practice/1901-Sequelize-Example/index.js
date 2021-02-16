const { initDb } = require('./db');
const server = require('./api');

initDb()
    .then(() => {
        server.listen(3000, () => {
            console.log('Server is listening!');
        });
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
