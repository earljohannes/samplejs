const fs = require('fs');


let code;

fs.readFile('ex.java', {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        code = data;
        console.log("Chala : "+code);
    } 

    else {
        console.log(err);
    }
});

console.log(code);