let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);

let N = A / (C - B);

let answer = Math.floor(N) + 1;

C - B <= 0 ? console.log(-1) : console.log(answer);