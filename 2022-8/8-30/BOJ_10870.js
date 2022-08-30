let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

input = Number(input[0]);

function fibonacci(input) {
  if (input === 0) {
    return 0;
  } else if (input === 1) {
    return 1;
  } else {
    return fibonacci(input - 1) + fibonacci(input - 2);
  }
};

console.log(fibonacci(input));