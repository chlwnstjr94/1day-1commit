let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let scores = input[1].split(' ').map(Number);

let max = scores.reduce((a, b) => Math.max(a, b));
let updated = [];

for (let i = 0; i < num; i++) {
  updated.push(scores[i] / max * 100);
}

console.log(updated.reduce((a, b) => a + b) / num);