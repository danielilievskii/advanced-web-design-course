'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (p1) => {
    rl.question('', (p2) => {
        p1 = p1.split(", ")
        p2 = p2.split(", ")

        console.log(hasSameBread(p1,p2))

        rl.close();
    })
});

// DO NOT CHANGE ABOVE THIS LINE!!!!

function hasSameBread(arr1, arr2) { // Write this function

    if((arr1[0] == arr2[0]) && (arr1[arr1.length-1] == arr2[arr2.length-1])) return true

    return false
}