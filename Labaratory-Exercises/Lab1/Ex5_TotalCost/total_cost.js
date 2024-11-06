'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (input) => {
    input = input.split(", ");
    console.log(totalCost(Number(input[0]), Number(input[1]), Number(input[2])));
    rl.close();
});

// DO NOT CHANGE ABOVE THIS LINE!!!!
function totalCost() {
    return arguments[0]*50 + arguments[1]*30 + arguments[2]*20
}
