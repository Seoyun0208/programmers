// a, b 중 큰 수를 max, 작은 수를 min 으로 선언 및 할당
// 작은 수부터 큰 수까지 더함

function solution(a, b) {
  let max = Math.max(a,b);
  let min = Math.min(a,b);
  let answer = 0;
  for (let i = min; i <= max; i++) {
      answer += i;
  }
  return answer;
}