// while 문을 통해 num 이 1이 아니면서 반복횟수가 500 미만을 만족하는 동안
// 1-1, 1-2 과정 반복하면서 반복하는 동안 횟수를 세어줌
// num 이 1이 되어 while 문을 나간 경우 반복횟수를 반환
// 반복횟수가 500 이상이 되어 while 문을 나간 경우 -1 반환

function solution(num) {
  let count = 0;
  while (num !== 1 && count < 500) {
     num % 2 === 0 ? num = num / 2 : num = num * 3 + 1;
     count++; 
  }
  return count < 500? count : -1;
}