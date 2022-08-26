let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = BigInt(input[0]);
const b = BigInt(input[1]);

let answer = a + b;

console.log(answer.toString());