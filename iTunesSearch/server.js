var express = require('express');
var app = exports.app = express();
app.use(express.static('public'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, path, id");
    next();
});

var api = require('./routes/apis');
app.get('/getalbums', api.getAlbums);

app.listen(3000, function () {
    console.log("server is running on port 3000");
});