const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
const uuid = require('uuid').v4; 
const port = process.argv[2];
const rp = require('request-prompise')

const nodeAddress = uuid().split('-').join('');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function(req, res) {
	res.send(bitcoin);
});

app.post('/transaction', function(req, res) {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.json({ note: "Transaction will be added in block ${blockIndex}."});
});

app.get('/mine', function(req, res) {

	const lastBlock = bitcoin.getLastBlock();
	const previousBlockHash = lastBlock['hash'];
	const currentBlockData = {
		transactions: bitcoin.pendingTransactions,
		index: lastBlock['index'] + 1
	};
	const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
	const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

	bitcoin.createNewTransaction(12.5, "00", nodeAddress);

	const newBlock = bitcoin.creatNewBlock(nonce, previousBlockHash, blockHash); 
	res.json({
		note: "New block mined successfully", 
		block: newBlock
	});

});


//register a node and broadcast a node to that network
app.post('/register-and-broadcast-node', function(req, res) {
	const newNodeUrl = req.body.newNodeUrl;
	if (bitcoin.networkNodes.indexOf(newNodeUrl) == -1) bitcoin.networkNodes.push(newNodeUrl);

	const regNodesPromises[];

	bitcoin.networkNodes.forEach(networkNodeUrl => {
		const requestOptions = {
			uri: networkNodeUrl + '/register-node',
			method: 'POST',
			body: { newNodeUrl: networkNodeUrl },
			json: true
		};

		regNodesPromises.push(rp(requestOptions));
	});

	Promise.all(regNodesPromises)
	.then(data => {
		//use the data...
	});

});


//register a node with the network
app.post('/register-node', function(req, res){

});


//
app.post('/register-node-bulk', function(req, res) {


});




app.listen(port, () => console.log(`Listening on ${port} ...`));