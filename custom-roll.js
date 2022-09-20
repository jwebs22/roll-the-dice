const prompt = require('prompt-sync')({sigint: true});

let sides = Number(prompt("How sides does your die/dice have: "));

console.log(`Below is a random roll of ${sides}-sides:`);

console.log(Math.ceil(Math.random()*sides));


