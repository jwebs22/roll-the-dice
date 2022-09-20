const prompt = require('prompt-sync')({sigint: true});

console.log("Want to rig the roll?");
let side = Number(prompt("What side of a 6-sided die do you want to favor? "));

let result = Math.ceil(Math.random()*7);

if (result === 7)
{
    console.log(`You rigged a ${side}.`);
} else 
{
    console.log(`You rolled a ${result}.`);
}

// possible rolls: 1 2 3 4 5 6
// we want: 1 2 3 4 5 6 + side
// So, actually 7 sides



