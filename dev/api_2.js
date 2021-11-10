const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
const uuid = require('uuid/v1');

const nodeAddress = uuid().split('-').join('');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function(req, res) {
	res.send('Hello Coding Javascript');
});

app.post('/transaction', function(req, res) {

});

app.get('/mine', function(req, res) {

});

app.listen(3000, () => console.log('Listening on port 3000...')