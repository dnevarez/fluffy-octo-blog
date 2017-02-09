var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('../config.json')

var data = require('./dummydata.js')

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

var port = config.port;


// endpoints
app.get('/posts', data.getPosts)


app.listen(port, function() {
    console.log("Started server on port ", port);
});
