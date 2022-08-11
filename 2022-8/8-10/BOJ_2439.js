let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let answer = '';

for (let i = 1; i <= num; i++) {
  for (let j = 0; j < num - i; j++) {
    answer += ' ';
  }
  for (let j = 0; j < i; j++) {
    answer += '*';
  }
  answer += '\n';
}

console.log(answer);