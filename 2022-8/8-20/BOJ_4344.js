let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

for (let t = 1; t <= testCase; t++) {
  let data = input[t].split(' ').map(Number);
  let num = data[0];
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += data[i];
  }
  let average = sum / num;

  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (data[i] > average) {
      cnt += 1;
    }
  }

  console.log(`${(cnt / num * 100).toFixed(3)}%`);
}