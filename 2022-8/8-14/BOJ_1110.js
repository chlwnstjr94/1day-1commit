let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let start = num;
let cycle = 0;

while (true) {
  num = num + "";
  if (num.length === 1) {
    num = "0" + num;
  }

  summary = Number(num[0]) + Number(num[1]);
  num = Number(num[1]) * 10 + summary % 10;

  cycle += 1;
  if (num === start) break;
}

console.log(cycle);