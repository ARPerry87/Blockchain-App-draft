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


const nonce = 100;


console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));