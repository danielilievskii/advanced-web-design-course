'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (input) => {
    let [n, m] = input.split(' ').map(Number);
    console.log(howManyBlocks(n, m));
    rl.close();
});

// DO NOT CHANGE ABOVE THIS LINE!!!!
function howManyBlocks(n, m) {
    let sum = 0;
    for(let i=0; i<n; i++) {
        sum+=m*m;
        m--;
    }
    return sum;
}
