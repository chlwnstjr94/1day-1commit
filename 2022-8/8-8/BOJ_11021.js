let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++ ) {
  let data = input[i].split(' ');
  console.log(`Case #${i}: ${Number(data[0]) + Number(data[1])}`);
}