let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let str = input.toString();
let result = str.charCodeAt(0);

console.log(result);