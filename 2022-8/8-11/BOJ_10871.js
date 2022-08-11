let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let x = Number(input[0].split(' ')[1]);
let answer = '';

let arr = input[1].split(' ').map(num => Number(num));

for (let data of arr) {
  if (data < x) {
    answer += data + ' ';
  }
}

console.log(answer);