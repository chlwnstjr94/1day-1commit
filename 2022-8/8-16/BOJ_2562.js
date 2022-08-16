let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let index = 0;
let value = 0;

for (let i = 0; i < 9; i++) {
  let data = Number(input[i]);
  if (value < data) {
    value = data;
    index = i;
  }
}

console.log(value);
console.log(index + 1);