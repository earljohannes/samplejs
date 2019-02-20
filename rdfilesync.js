const fs = require('fs');


var code;

code = fs.readFileSync('ex.java', {encoding: 'utf-8'});

console.log(code);