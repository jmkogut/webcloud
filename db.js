var simpledb = require('simpledb'),
    fs       = require('fs');

var raw      = fs.readFileSync(process.env['HOME']+'/.s3.pass');

var creds    = JSON.parse( raw.toString() ),
    han      = new simpledb.SimpleDB(creds);

module.exports = new simpledb.SimpleDB(creds);
