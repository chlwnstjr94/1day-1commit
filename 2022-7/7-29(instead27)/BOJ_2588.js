// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);

let b_1 = Number(input[1][2]); // 1의 자리
let b_10 = Number(input[1][1]); // 10의 자리
let b_100 = Number(input[1][0]); // 100의 자리

console.log(a * b_1);
console.log(a * b_10);
console.log(a * b_100);
console.log(a * b);