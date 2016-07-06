var express = require('express');
var app = express();
const PORT = 3000;
var middleware = require('./middleware');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication ,function(req, res) {
    res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
    console.log('Server listening on port ' + PORT);
});