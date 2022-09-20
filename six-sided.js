const prompt = require('prompt-sync')({sigint: true});

console.log("Below is a random roll of a 6-sided die:");
console.log(Math.ceil(Math.random()*6));
