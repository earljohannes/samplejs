const fs = require('fs');


let code;

let promise = new Promise((resolve, reject) => {
	fs.readFile('Huntersa.json', {encoding: 'utf-8'}, (err, data) => err ? reject(err) : resolve(data));
}).then((result) => console.log(result+" pehle hi chal gya")).catch((error) => console.log(error));