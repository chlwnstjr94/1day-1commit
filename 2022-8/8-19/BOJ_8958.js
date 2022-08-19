let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let data = input[i];

  let score = 0;
  let length = 0;
  for (answer of data) {
    if (answer === 'O') {
      score += length + 1;
      length += 1;
    } else {
      length = 0;
    }
  }
  console.log(score);
}