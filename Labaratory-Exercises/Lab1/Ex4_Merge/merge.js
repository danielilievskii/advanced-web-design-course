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

        console.log(merge(p1,p2))

        rl.close();
    })
});

// DO NOT CHANGE ABOVE THIS LINE!!!!

const merge = function(arr1, arr2){
    let arr3 = []

    for(let i=0; i<arr1.length; i++) {
        arr3.push([arr1[i], arr2[i]])
    }

    return arr3
} // Write this function
