// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  let input = line.split(' ');

  let hour = Number(input[0]);
  let min = Number(input[1]);
  
  if (min - 45 < 0) {
    min = 60 + (min - 45);
    hour -= 1;

    if (hour === -1) {
      hour = 23;
    }
  } else {
    min -= 45;
  }

  console.log(hour + ' ' + min);
}).on('close', function () {
  process.exit();
});