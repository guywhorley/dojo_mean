var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    path     = require( 'path' ),
    bodyParser = require('body-parser'),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();

app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});