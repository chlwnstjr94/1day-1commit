let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (i = 0; i < input.length; i++) {
  let a = Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);

  if (a + b === 0) {
    break;
  } else {
    console.log(a + b);
  }
}