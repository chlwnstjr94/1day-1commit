// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let year = Number(input[0]);

if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
  console.log(1);
} else {
  console.log(0);
}