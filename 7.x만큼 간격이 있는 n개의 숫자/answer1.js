// x 와 i 를 곱한 수를 answer 배열에 넣음
// 위의 과정을 n 번 진행

function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
      answer.push(x*i)
  }
  return answer;
}