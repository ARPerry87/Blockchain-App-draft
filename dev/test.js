const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();


const previousBlockHash = '4875QRDJFDAJFD12432SKJA8'
const currentBlockData = [
	{
		amount: 10,
		sender: 'ASLK817001JFDKAJLA',
		recipient: 'DKWOAH9097AJWIHA1736'
	},
	{
		amount: 2,
		sender: 'DKWLA9981URJSLA8H',
		recipient: 'ZNKSUIWNA78798YHANA'
	},
	{
		amount: 100,
		sender: '9586JFJUHANAKDSL98987',
		recipient: '8172JJNNWIOPQ78142563'
	},
];


Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
// => repeatedly hash block until it finds correct hash => '0000987JKKPQJKDNSANW'
// => uses current block data for the hash, but also the previousBlockHash
// => continusously changes nonce value until it finds the correct hash
// => returns to us the nonce value the creates the correct hash

}


const nonce = 100;


console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));