const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389,'01NA90SDNF0N','01NA90SDNF9N');
bitcoin.createNewTransaction(100,'ALEXf138920u1dal','JENf138920u1dal');
bitcoin.createNewBlock(8707821,'239048QIOEUQP','490UWRITWO9809');


console.log(bitcoin.chain[1]);