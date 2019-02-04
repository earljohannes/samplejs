const stream = require("stream");
const fs = require("fs");
const readline = require("readline");

console.log(Object.getOwnPropertyNames(stream));
console.log(Object.getOwnPropertyNames(fs));
console.log(Object.getOwnPropertyNames(readline.Interface.prototype));