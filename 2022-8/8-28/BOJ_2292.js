let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let range = 1;
let block = 1;

while (block < input) {    
  block += 6 * range;

  range++;
}

console.log(range);