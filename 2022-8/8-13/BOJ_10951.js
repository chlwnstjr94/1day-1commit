let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (i = 0; i < input.length - 1; i++) {
  let a = Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);

  console.log(a + b);
}