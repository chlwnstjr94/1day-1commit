// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);

if (a >= 90) {
  console.log('A');
} else if (a >= 80) {
  console.log('B');
} else if (a >= 70) {
  console.log('C');
} else if (a >= 60) {
  console.log('D');
} else {
  console.log('F');
}