let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
let numbers = input[1].split('');
let sum = 0;

for (let i = 0; i < count; i++) {
  sum = sum + Number(numbers[i]);
}

console.log(sum);