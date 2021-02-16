const express = require( 'express' );
const app = express();
// http://localhost:8081/ ---> "hello from express"
app.get( './', ( req, res ) => {
  res.send( 'hello from express' );
} );
const port = 8081;
app.listen( port, () => console.log( `listening on port ${ port }` ) );
